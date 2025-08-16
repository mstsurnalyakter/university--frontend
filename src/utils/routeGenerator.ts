import type { TRoute, TUserPath } from "../types";

const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((item) => {
        acc.push({
          path: item.path!,
          element: item.element,
        });
      });
    }

    return acc;
  }, []);
  return routes;
};

export default routeGenerator;
