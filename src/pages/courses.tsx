import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface IMenuGeneral {
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

const Courses = () => {
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
      `https://tarea-1.2023-1.tallerdeintegracion.cl/courses?sort=${sortBy}&order=${order}&page=${page}&size=10`,
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
        <h2
          id="menus"
          className="mx-auto mt-36 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8"
        >
          Nuestros platos
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
            {menus.map((menu: IMenuGeneral) => (
              <li key={menu.id}>
                <a
                  href={`/course/${menu.id}`}
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
                    {menus.map((menu: IMenuGeneral) => (
                      <tr key={menu.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={`/course/${menu.id}`}
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
      </div>
    </Main>
  );
};

export default Courses;
