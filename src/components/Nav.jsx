import React, { useState } from 'react';
import '../styles/style.css';
import { Link, NavLink } from 'react-router-dom';
function Nav({ showNav, toggleNav }) {
  return (
    <div className="flex flex-col justify-between items-center w-full sm:w-auto mr-10 h-[120vh]">
      <section className={`section nav h-[114vh] mb-[20%] flex flex-col justify-between items-center p-4 ${showNav ? 'show' : ''}`}>
        <div>
          <Link to='/'><img className='w-32 hsvg-32 rounded-full border-white border-2 cursor-pointer hover:scale-110 transition duration-500 ease-in-out hover:shadow hover:shadow-blue-900 hover:shadow-2xl' src="../src/assets/images/bank-icon.svg" alt="bank icon" /></Link>
          <nav className='navLinks w-full h-[100vh] sm:w-auto sm:flex sm:flex-col sm:items-center mt-4 sm:mt-0 '>
            <ul className='navLinksList h-screen w-full sm:flex sm:space-x-6 '>
              <div>
                <li className='w-full '>
                  <details className="group [&_summary::-webkit-details-marker]:hidden ">
                    <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-blue-600 ">
                      <div className="flex items-center gap-2 ">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3000" height="3000" viewBox="0 0 3000 3000">
                          <path fill-rule="evenodd" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 1500 0 C 2328.421875 0 3000 671.578125 3000 1500 C 3000 2328.425781 2328.421875 2999.996094 1500 2999.996094 C 671.574219 2999.996094 0.00390625 2328.425781 0.00390625 1500 C 0.00390625 671.578125 671.574219 0 1500 0 " />
                          <path fill-rule="evenodd" fill="rgb(98.4375%, 97.65625%, 96.09375%)" fill-opacity="1" d="M 1500 122.691406 C 2260.671875 122.691406 2877.308594 739.328125 2877.308594 1500 C 2877.308594 2260.671875 2260.671875 2877.3125 1500 2877.3125 C 739.328125 2877.3125 122.6875 2260.671875 122.6875 1500 C 122.6875 739.328125 739.328125 122.691406 1500 122.691406 " />
                          <path fill-rule="evenodd" fill="rgb(88.671875%, 87.889099%, 86.71875%)" fill-opacity="1" d="M 1416.359375 156.140625 C 2177.019531 156.140625 2793.671875 772.789062 2793.671875 1533.460938 C 2793.671875 2097.511719 2454.601562 2582.375 1969.171875 2795.34375 C 2498.851562 2603.449219 2877.308594 2095.921875 2877.308594 1500 C 2877.308594 739.328125 2260.671875 122.691406 1500 122.691406 C 1303.390625 122.691406 1116.398438 163.878906 947.1875 238.121094 C 1093.621094 185.070312 1251.609375 156.140625 1416.359375 156.140625 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 2095.050781 1305.648438 C 2095.050781 1277.769531 2137.398438 1277.769531 2137.398438 1305.648438 L 2137.398438 2078.429688 C 2137.398438 2106.308594 2095.050781 2106.308594 2095.050781 2078.429688 Z M 1981.449219 2078.429688 C 1981.449219 2106.308594 1939.089844 2106.308594 1939.089844 2078.429688 L 1939.089844 1305.648438 C 1939.089844 1277.769531 1981.449219 1277.769531 1981.449219 1305.648438 L 1981.449219 2078.429688 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 1018.558594 1305.648438 C 1018.558594 1277.769531 1060.910156 1277.769531 1060.910156 1305.648438 L 1060.910156 2078.429688 C 1060.910156 2106.308594 1018.558594 2106.308594 1018.558594 2078.429688 Z M 904.957031 2078.429688 C 904.957031 2106.308594 862.605469 2106.308594 862.605469 2078.429688 L 862.605469 1305.648438 C 862.605469 1277.769531 904.957031 1277.769531 904.957031 1305.648438 L 904.957031 2078.429688 " />
                          <path fill-rule="nonzero" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 1180.871094 1174.691406 L 1180.871094 1248.679688 C 1180.871094 1291.839844 1145.5 1326.828125 1102.71875 1326.828125 L 820.792969 1326.828125 C 777.632812 1326.828125 742.640625 1291.460938 742.640625 1248.679688 L 742.640625 1174.691406 L 1180.871094 1174.691406 " />
                          <path fill-rule="nonzero" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 2257.359375 1174.691406 L 2257.359375 1248.679688 C 2257.359375 1291.648438 2222.179688 1326.828125 2179.210938 1326.828125 L 1897.28125 1326.828125 C 1854.371094 1326.828125 1819.128906 1291.589844 1819.128906 1248.679688 L 1819.128906 1174.691406 L 2257.359375 1174.691406 " />
                          <path fill-rule="nonzero" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 1500 1403.949219 C 1755.828125 1403.949219 1884.75 1714.710938 1703.710938 1895.761719 C 1522.691406 2076.789062 1211.898438 1947.890625 1211.898438 1692.039062 C 1211.898438 1532.941406 1340.878906 1403.949219 1500 1403.949219 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 1580.828125 1632.390625 C 1580.828125 1660.269531 1538.480469 1660.269531 1538.480469 1632.390625 C 1538.480469 1581.800781 1461.519531 1581.621094 1461.519531 1632.390625 C 1461.519531 1653.738281 1478.648438 1670.871094 1500 1670.871094 C 1571.601562 1670.871094 1608.089844 1757.839844 1557.070312 1808.851562 C 1506.109375 1859.800781 1419.171875 1823.089844 1419.171875 1751.699219 C 1419.171875 1723.820312 1461.519531 1723.820312 1461.519531 1751.699219 C 1461.519531 1802.398438 1538.480469 1802.398438 1538.480469 1751.699219 C 1538.480469 1730.449219 1521.25 1713.21875 1500 1713.21875 C 1428.699219 1713.21875 1391.78125 1626.371094 1442.921875 1575.238281 C 1493.78125 1524.390625 1580.828125 1560.71875 1580.828125 1632.390625 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 1478.820312 1524.929688 C 1478.820312 1497.050781 1521.171875 1497.050781 1521.171875 1524.929688 C 1521.171875 1556.289062 1528.191406 1593.910156 1500 1593.910156 C 1471.800781 1593.910156 1478.820312 1556.289062 1478.820312 1524.929688 Z M 1478.820312 1811.351562 C 1478.820312 1783.46875 1521.171875 1783.46875 1521.171875 1811.351562 C 1521.171875 1842.710938 1528.191406 1880.339844 1500 1880.339844 C 1471.800781 1880.339844 1478.820312 1842.710938 1478.820312 1811.351562 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 1511.691406 600.058594 L 2390.589844 1156.820312 C 2408.5 1168.128906 2400.320312 1195.789062 2379.339844 1195.800781 L 2379.339844 1195.859375 L 620.660156 1195.859375 C 599.765625 1195.859375 590.515625 1167.71875 610.753906 1155.96875 L 1488.75 599.78125 C 1496.011719 595.210938 1504.980469 595.609375 1511.691406 600.058594 Z M 2306.460938 1153.511719 L 1500 642.648438 L 693.542969 1153.511719 Z M 2306.460938 1153.511719 " />
                          <path fill-rule="nonzero" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 1180.871094 2209.394531 L 742.640625 2209.394531 L 742.640625 2135.40625 C 742.640625 2092.625 777.632812 2057.253906 820.792969 2057.253906 L 1102.71875 2057.253906 C 1145.5 2057.253906 1180.871094 2092.242188 1180.871094 2135.40625 L 1180.871094 2209.394531 " />
                          <path fill-rule="nonzero" fill="rgb(52.146912%, 58.396912%, 59.959412%)" fill-opacity="1" d="M 2257.359375 2209.394531 L 1819.128906 2209.394531 L 1819.128906 2135.40625 C 1819.128906 2092.496094 1854.371094 2057.253906 1897.28125 2057.253906 L 2179.210938 2057.253906 C 2200.71875 2057.253906 2220.269531 2066.046875 2234.421875 2080.191406 L 2234.378906 2080.234375 C 2248.558594 2094.429688 2257.359375 2113.96875 2257.359375 2135.40625 L 2257.359375 2209.394531 " />
                          <path fill-rule="nonzero" fill="rgb(0.78125%, 16.479492%, 19.604492%)" fill-opacity="1" d="M 701.648438 2188.21875 L 2298.351562 2188.21875 C 2343.46875 2188.21875 2380.519531 2225.273438 2380.519531 2270.382812 C 2380.519531 2313.289062 2386.558594 2349.6875 2356.261719 2379.457031 C 2341.351562 2394.3125 2320.851562 2403.53125 2298.351562 2403.53125 L 701.648438 2403.53125 C 656.53125 2403.53125 619.484375 2366.476562 619.484375 2321.367188 C 619.484375 2278.460938 613.441406 2242.058594 643.738281 2212.292969 C 658.648438 2197.4375 679.152344 2188.21875 701.648438 2188.21875 Z M 2298.351562 2230.570312 L 701.648438 2230.570312 C 679.6875 2230.570312 661.835938 2248.417969 661.835938 2270.382812 C 661.835938 2301.863281 656.628906 2332.628906 673.550781 2349.546875 C 680.722656 2356.71875 690.671875 2361.179688 701.648438 2361.179688 L 2298.351562 2361.179688 C 2320.308594 2361.179688 2338.160156 2343.328125 2338.160156 2321.367188 C 2338.160156 2289.878906 2343.371094 2259.121094 2326.449219 2242.203125 C 2319.28125 2235.03125 2309.328125 2230.570312 2298.351562 2230.570312 " />
                        </svg>
                        <Link to="/" className="text-2xl text-white "> Home </Link>
                      </div>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 px-4 ">
                      <li className='w-full '>
                        <Link to="/accounts" className="group w-full text-xm flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-blue-600 ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>Accounts
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className=''>
                  <details className="group [&_summary::-webkit-details-marker]:hidden ">
                    <summary className="group flex items-center justify-between rounded-lg px-4 py-2  text-white hover:bg-blue-600 ">
                      <div className="flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <Link to="/cards" className="text-2xl  text-white"> Cards </Link>
                      </div>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <Link to="/newCard" className="group flex items-center justify-center gap-2 rounded-lg px-4 py-2  text-white hover:bg-blue-600 ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>New Card</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden ">
                    <summary
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-blue-600 "
                    >
                      <div className="flex items-center gap-2 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="RGB(255 255 255)">
                          <path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z" />
                        </svg>


                        <Link to="/transactions" className="text-2xl text-white "> Transactions </Link>
                      </div>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4 ">
                      <li className=''>
                        <Link to="/newTransaction"
                          className="group flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-blue-600 ">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="RGB(255 255 255)">
                            <path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z" />
                          </svg>New Transaction</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className=''>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-blue-600 "
                    >
                      <div className="flex items-center gap-2 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="RGB(255 255 255)">
                          <path d="m558-144 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-57-19q-16-5-23-20t-2-31q5-16 19.5-23.5T450-346l42 14q17 5 38.5 8t58.5 4h11q0-11-6.5-21T578-354l-234-86h-64v220l278 76Zm-21 78-257-72q-8 26-31.5 42T200-80h-80q-33 0-56.5-23.5T40-160v-280q0-33 23.5-56.5T120-520h224q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87q0 22-11.5 34.5T833-145L583-67q-11 4-23 4t-23-3Zm-417-94h80v-280h-80v280Zm440-722q12 0 23.5 3.5T606-867l200 143q16 11 25 28t9 37v219q0 17-11.5 28.5T800-400q-17 0-28.5-11.5T760-440v-220L560-800 360-660v20q0 17-11.5 28.5T320-600q-17 0-28.5-11.5T280-640v-19q0-20 9-37t25-28l200-143q11-8 22.5-11.5T560-882Zm0 102Zm-40 140q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-80 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
                        </svg>

                        <Link to="loans" className="text-2xl text-white "> Loans </Link>
                      </div>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <Link to="/newLoan"
                          className="group flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-blue-600 ">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="RGB(255 255 255)">
                            <path d="m558-144 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-57-19q-16-5-23-20t-2-31q5-16 19.5-23.5T450-346l42 14q17 5 38.5 8t58.5 4h11q0-11-6.5-21T578-354l-234-86h-64v220l278 76Zm-21 78-257-72q-8 26-31.5 42T200-80h-80q-33 0-56.5-23.5T40-160v-280q0-33 23.5-56.5T120-520h224q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87q0 22-11.5 34.5T833-145L583-67q-11 4-23 4t-23-3Zm-417-94h80v-280h-80v280Zm440-722q12 0 23.5 3.5T606-867l200 143q16 11 25 28t9 37v219q0 17-11.5 28.5T800-400q-17 0-28.5-11.5T760-440v-220L560-800 360-660v20q0 17-11.5 28.5T320-600q-17 0-28.5-11.5T280-640v-19q0-20 9-37t25-28l200-143q11-8 22.5-11.5T560-882Zm0 102Zm-40 140q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-80 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
                          </svg>New Loan</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </div>
              <div className='pt-5'>
                <NavLink to='/login'>
                  <form action="#">
                    <button
                      type="submit"
                      className=" bg-custom-gradient w-30 h-30 rounded-lg px-4 py-2 text-lg font-medium text-white [text-align:_inherit] hover:bg-blue-600 "
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="RGB(255 255 255)">
                        <path d="M806-440H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h446l-34-34q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T829-611l103 103q12 12 12 28t-12 28L829-349q-12 12-28.5 11.5T772-350q-11-12-11.5-28t11.5-28l34-34ZM600-640v-120H200v560h400v-120q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320v120q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v120q0 17-11.5 28.5T640-600q-17 0-28.5-11.5T600-640Z" />
                      </svg>
                    </button>
                  </form>
                </NavLink>
              </div>

            </ul>

          </nav>

        </div>
      </section>
    </div>
  );
}

export default Nav;

