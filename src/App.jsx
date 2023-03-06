import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Favorites from './routes/Favorites';
import Edit from './routes/Edit';
import HeaderTitle from './components/HeaderTitle';
import SearchContextComponent from './components/SearchContextComponent';
import { SearchProvider } from './hooks/SearchProvider';

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <div className="min-h-full">
          <HeaderTitle />
          <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <SearchContextComponent />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="py-10">
            <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                <nav
                  aria-label="Sidebar"
                  className="sticky top-4 divide-y divide-gray-300"
                >
                  {/* navigation */}
                  <div className="pb-8 space-y-1">
                    <ul className="grid gap-2 ">
                      <a href="/">
                        <li className="text-left w-48 bg-gray-300 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded">
                          Home
                        </li>
                      </a>
                      <a href="/favorites">
                        <li className="text-left w-48 bg-gray-300 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded">
                          Favorites
                        </li>
                      </a>
                    </ul>
                  </div>
                </nav>
              </div>
              <main className="lg:col-span-9">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/edit" element={<Edit />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
