import { StarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Reviews from '@/components/reviews';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface IIngredients {
  id: string;
  name: string;
  quantity: string;
}

interface ICourse {
  id: string;
  name: string;
  price: number;
  description: string;
  size: number;
  expiration: number;
  category: string;
  img_url: string;
  ingredients: IIngredients[];
}

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
};

function formatCurrency(num: number): string {
  const formattedNum = num.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
  return formattedNum.replace(/\s/g, ''); // Remove spaces between currency symbol and value
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Course = () => {
  const [course, setCourse] = useState<ICourse>({
    price: 0,
    size: 0,
    expiration: 0,
    id: '',
    name: '',
    description: '',
    category: '',
    img_url: '',
    ingredients: [
      {
        id: '',
        name: '',
        quantity: '',
      },
    ],
  });
  const router = useRouter();
  const { id } = router.query;
  const menuId = id as string;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/courses/${id}`, {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Main
      meta={
        <Meta
          title="Donde Ibai"
          description="¿Quieres comer como Ibai? ¿Quieres vivir como Ibai? ¿Quieres ser como Ibai? ¡Pues aquí tienes la oportunidad!"
        />
      }
    >
      {course ? (
        <>
          <div className="my-36 mx-10 lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={course.img_url}
                  alt={course.img_url}
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {course.name}
                  </h1>

                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {course.category}{' '}
                  </p>
                </div>

                <div>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-yellow-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
              </div>

              <p className="mt-6 text-gray-500">{course.description}</p>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Ingredientes
                </h3>
                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    {course.ingredients.map((ingredients) => (
                      <a
                        key={ingredients.id}
                        href={`/ingredient/${ingredients.id}`}
                      >
                        <li>{ingredients.name}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Más detalles:
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  <p className="mt-2 text-sm text-gray-500">
                    Precio: {formatCurrency(course.price)}{' '}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Peso: {course.size} gr
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Expiración: {course.expiration}{' '}
                  </p>
                </p>
              </div>
            </div>
          </div>
          <Reviews id={menuId}></Reviews>
        </>
      ) : null}
    </Main>
  );
};

export default Course;
