import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface IResult {
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

const Search = () => {
  const [menus, setMenus] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const router = useRouter();
  const querySearch = router.query.query;

  useEffect(() => {
    if (querySearch === undefined) return;
    fetch(
      `https://tarea-1.2023-1.tallerdeintegracion.cl/search/trays?name=${querySearch}`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((error) => console.error(error));

    fetch(
      `https://tarea-1.2023-1.tallerdeintegracion.cl/search/courses?name=${querySearch}`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error(error));

    fetch(
      `https://tarea-1.2023-1.tallerdeintegracion.cl/search/ingredients?name=${querySearch}`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => console.error(error));
  }, [querySearch]);

  if (!menus) return <p>loading</p>;

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
          Resultados de busqueda en menús
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {menus.map((menu: IResult) => (
              <li key={menu.id}>
                <a
                  href={`/ingredient/${menu.id}`}
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
                    {menus.map((menu: IResult) => (
                      <tr key={menu.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={`/ingredient/${menu.id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          id="platos"
          className="mx-auto mt-36 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8"
        >
          Resultados de busqueda en platos
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {courses.map((menu: IResult) => (
              <li key={menu.id}>
                <a
                  href={`/ingredient/${menu.id}`}
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
                    {courses.map((menu: IResult) => (
                      <tr key={menu.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={`/ingredient/${menu.id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          id="ingredientes"
          className="mx-auto mt-36 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8"
        >
          Resultados de busqueda en ingredientes
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {ingredients.map((menu: IResult) => (
              <li key={menu.id}>
                <a
                  href={`/ingredient/${menu.id}`}
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
                    {ingredients.map((menu: IResult) => (
                      <tr key={menu.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={`/ingredient/${menu.id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Search;
