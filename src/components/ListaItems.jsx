import { useMemo } from "react";
import { getCategories } from "../helpers/getCategories";
import { ItemsCard } from "./ItemsCard";


export const ListaItems = ({country}) => {
    const items = useMemo(() => getCategories(country), [country]);

    return (
      <div className="row rows-cols-1 row-cols-md-3 g-3">
          {
            items.map((item) =>(
                <ItemsCard  key={item.id} {...item} />
            ))
          }
      </div>
    )
}
