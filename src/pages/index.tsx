import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface ICourseGeneral {
  id: string;
  name: string;
  price: number;
}

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

const Index = () => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [menus, setMenus] = useState([]);
  const [order, setOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const [sortOptions, setSortOptions] = useState([
    { name: 'Nombre: A-Z', sortBy: 'name', order: 'asc', current: true },
    { name: 'Nombre: Z-A', sortBy: 'name', order: 'desc', current: false },
    {
      name: 'Precio: Menor a Mayor',
      sortBy: 'price',
      order: 'asc',
      current: false,
    },
    {
      name: 'Precio: Mayor a Menor',
      sortBy: 'price',
      order: 'desc',
      current: false,
    },
  ]);

  useEffect(() => {
    fetch(
      `https://tarea-1.2023-1.tallerdeintegracion.cl/trays?sort=${sortBy}&order=${order}&page=${page}&size=10`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMenus(data.items);
        setMaxPages(data.pages);
      })
      .catch((error) => console.error(error));
  }, [page, sortBy, order]);

  return (
    <Main
      meta={
        <Meta
          title="Donde Ibai"
          description="¿Quieres comer como Ibai? ¿Quieres vivir como Ibai? ¿Quieres ser como Ibai? ¡Pues aquí tienes la oportunidad!"
        />
      }
    >
      <div>
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                ¡Ey, ey, ey! Hoy vengo a presentaros un sitio muy especial, se
                trata de mi nuevo lugar de tapas.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  En Donde Ibai podréis encontrar platos deliciosos y
                  sorprendentes, creados con los mejores ingredientes y
                  elaborados por nuestros expertos chefs. Además, nuestro equipo
                  de camareros estará siempre a vuestra disposición para hacer
                  de vuestra experiencia en el restaurante algo único.
                </p>
              </div>
              <img
                src="https://media.revistagq.com/photos/5eb277d25329b7e078a94336/3:2/w_4026,h_2684,c_limit/GettyImages-1030963330.jpg"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <h2
          id="menus"
          className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8"
        >
          Nuestros menús
        </h2>

        <div className="mx-auto my-4 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          <Menu as="div" className="relative inline-block text-left">
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
                            setSortBy(option.sortBy);
                            setOrder(option.order);
                            setSortOptions(
                              sortOptions.map((item, i) => ({
                                ...item,
                                current: i === index,
                              }))
                            );
                            setPage(1);
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
        </div>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {menus.map((menu: ICourseGeneral) => (
              <li key={menu.id}>
                <a
                  href={`/menu/${menu.id}`}
                  className="block bg-white p-4 hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <span className="flex flex-col truncate text-sm text-gray-500">
                        <span className="truncate">{menu.name}</span>
                        <span>
                          <span className="font-medium text-gray-900">
                            {formatCurrency(menu.price)}
                          </span>
                        </span>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="h-5 w-5 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
            aria-label="Pagination"
          >
            <div className="flex flex-1 justify-between">
              {page > 1 ? (
                <button
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  Anterior
                </button>
              ) : null}
              {page !== maxPages ? (
                <button
                  className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Siguiente
                </button>
              ) : null}
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flex flex-col">
              <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Menú
                      </th>
                      <th
                        className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Precio
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {menus.map((menu: ICourseGeneral) => (
                      <tr key={menu.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={`/menu/${menu.id}`}
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              <p className="truncate text-gray-500 group-hover:text-gray-900">
                                {menu.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            {formatCurrency(menu.price)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Mostrando{' '}
                      <span className="font-medium">{(page - 1) * 10 + 1}</span>{' '}
                      a <span className="font-medium">{page * 10}</span> de{' '}
                      <span className="font-medium">{maxPages * 10}</span>{' '}
                      resultados
                    </p>
                  </div>
                  <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                    {page > 1 ? (
                      <button
                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => {
                          setPage(page - 1);
                        }}
                      >
                        Anterior
                      </button>
                    ) : null}
                    {page !== maxPages ? (
                      <button
                        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => {
                          setPage(page + 1);
                        }}
                      >
                        Siguiente
                      </button>
                    ) : null}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Nuestro hogar
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Pero no solo eso, en Donde Ibai también podréis disfrutar de
                  un ambiente muy especial. Hemos cuidado cada detalle para que
                  os sintáis como en casa, con una decoración acogedora y un
                  ambiente relajado en el que podréis pasar un rato increíble
                  con vuestros amigos o familiares.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  AY, por supuesto, no podemos olvidarnos de los streamings en
                  vivo que podréis disfrutar en nuestro restaurante. ¡Sí, sí,
                  como lo oís! Además de la deliciosa comida y el ambiente
                  acogedor, podréis disfrutar de mis directos en el restaurante
                  mientras degustáis vuestros platos favoritos. ¿No es genial?
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
