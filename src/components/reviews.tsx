import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, useState } from 'react';

interface Review {
  username: string;
  date: string;
  rating: number;
  content: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function calculateMean(objects: Review[]): number {
  const sum = objects.reduce((acc, obj) => acc + obj.rating, 0);
  return sum / objects.length;
}

interface IReviewsProps {
  id: string;
}

type OrderBy = 'date' | 'rating';

function order(list: Review[], orderBy: OrderBy): Review[] {
  const sortedList = [...list].sort((a, b) => {
    if (orderBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (orderBy === 'rating') {
      return b.rating - a.rating;
    }
    throw new Error(`Invalid orderBy parameter: ${orderBy}`);
  });
  return sortedList;
}

async function postReview(
  entityId: string,
  email: string,
  password: string,
  content: string,
  rating: string
): Promise<void> {
  const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl/reviews';

  const requestBody = JSON.stringify({
    entity_id: entityId,
    email,
    password,
    content,
    rating,
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error(`Failed to post review: ${response.statusText}`);
  }
}

const Reviews = (props: IReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [orderBy, setOrderBy] = useState<OrderBy>('date');
  const [sortOptions, setSortOptions] = useState([
    { name: 'Rating', sortBy: 'rating' as OrderBy, current: true },
    { name: 'Fecha', sortBy: 'date' as OrderBy, current: false },
  ]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState('5');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (props.id === undefined) {
      return;
    }
    fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/reviews/${props.id}`, {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, [props.id]);

  useEffect(() => {
    setReviews(order(reviews, orderBy));
  }, [orderBy]);

  return (
    <div className="bg-white">
      <div className="mx-36 max-w-xl bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            ¿Lo probaste? ¡Cuéntanos tu experiencia!
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>La reseña quedara al todo el publico.</p>
          </div>
          <form className="mt-5 p-2">
            <div className="w-full p-2 sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full p-2 sm:max-w-xs">
              <label htmlFor="password" className="sr-only">
                Clave
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Contraseña"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="w-full p-2 sm:max-w-xs">
              <label htmlFor="text" className="sr-only">
                Comentario
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Comentario"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div className="w-full p-2 sm:max-w-xs">
              <select
                id="rating"
                name="rating"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="5"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
              onClick={() => {
                postReview(props.id, email, password, content, rating);
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Reseñas</h2>
        {reviews ? (
          <>
            Promedio calificaciones: {calculateMean(reviews)}
            <Menu as="div" className="relative mx-10 inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Ordenar
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option, index) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              setOrderBy(option.sortBy);
                              setSortOptions(
                                sortOptions.map((item, i) => ({
                                  ...item,
                                  current: i === index,
                                }))
                              );
                            }}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="mt-6 space-y-10 divide-y divide-gray-200 border-y border-gray-200 pb-10">
              {reviews.map((review) => (
                <div
                  key={review.username}
                  className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                >
                  <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                    <div className="flex items-center xl:col-span-1">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((ratingg) => (
                          <StarIcon
                            key={ratingg}
                            className={classNames(
                              review.rating > ratingg
                                ? 'text-yellow-400'
                                : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        {review.rating}
                        <span className="sr-only">de 5 estrellas</span>
                      </p>
                    </div>

                    <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {review.username}
                      </h3>

                      <div
                        className="mt-3 space-y-6 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                    <p className="font-medium text-gray-900">
                      {review.username}
                    </p>
                    <time
                      dateTime={review.date}
                      className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                    >
                      {formatDate(review.date)}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Reviews;
