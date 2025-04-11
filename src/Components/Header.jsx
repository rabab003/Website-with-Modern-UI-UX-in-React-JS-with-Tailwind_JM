import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const pathname = useLocation();
  return (
    <div
      className="fixed w-full text-white top-0 z-50 bg-n-8 backdrop-blur-sm border-b
    border-n-6 lg:bg-n-8 lg:backdrop-blur-sm"
    >
      <div
        className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4"
      >
        <a href="" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

// import { brainwave } from "../assets";
// import { navigation } from "../constants";
// import { useLocation } from "react-router-dom";

// export const Header = () => {
//   const { hash } = useLocation();

//   return (
//     <div className="fixed w-full text-white top-0 z-50 bg-n-8 backdrop-blur-sm border-b border-n-6 lg:bg-n-8 lg:backdrop-blur-sm">
//       <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
//         <a href="" className="block w-[12rem] xl:mr-8">
//           <img src={brainwave} width={190} height={40} alt="brainwave" />
//         </a>

//         <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
//           <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-1 ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
//                   item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1"
//                 }`}
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
