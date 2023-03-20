import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Reviews from '@/components/reviews';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface ICourse {
  id: string;
  name: string;
  img_url: string;
  category: string;
}

interface IMenu {
  id: string;
  name: string;
  price: number;
  description: string[];
  size: number;
  expiration: number;
  courses: ICourse[];
}

function formatCurrency(num: number): string {
  const formattedNum = num.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
  return formattedNum.replace(/\s/g, ''); // Remove spaces between currency symbol and value
}

const Menu = () => {
  const [menu, setMenu] = useState<IMenu>({
    price: 0,
    size: 0,
    expiration: 0,
    id: '',
    name: '',
    description: [''],
    courses: [
      {
        id: '',
        name: '',
        img_url: '',
        category: '',
      },
    ],
  });
  const router = useRouter();
  const { id } = router.query;
  const menuId = id as string;

  useEffect(() => {
    if (!id) return;
    fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/trays/${id}`, {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <Main
      meta={
        <Meta
          title="Donde Ibai"
          description="¿Quieres comer como Ibai? ¿Quieres vivir como Ibai? ¿Quieres ser como Ibai? ¡Pues aquí tienes la oportunidad!"
        />
      }
    >
      {menu ? (
        <>
          <div className="my-36 mx-10">
            <div className="max-w-4xl">
              <h1
                id="order-history-heading"
                className="text-3xl font-bold tracking-tight text-gray-900"
              >
                {menu.name}
              </h1>
              <p className="mt-2 text-sm text-gray-500">{menu.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                Precio: {formatCurrency(menu.price)}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Tamaño: {menu.size} gr
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Vencimiento: {menu.expiration}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              {menu.courses.map((order) => (
                <div key={order.id} className="group relative">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                      src={order.img_url}
                      alt={order.img_url}
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-gray-500">
                    <a href={`/course/${order.id}`}>
                      <span className="absolute inset-0" />
                      {order.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium">
                    <span className="text-gray-400">{order.category} </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Reviews id={menuId}></Reviews>
        </>
      ) : null}
    </Main>
  );
};

export default Menu;
