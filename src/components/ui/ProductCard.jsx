import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductCard =({data}) => {
    return (
        <Link to={"/"} className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <img
                src={data.images[0]}
                alt={data.name}
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-sm text-primary/80">{data.category}</p>
            </div>
            <div className="flex items-center justify-between">{data.price}</div>
          </CardFooter>
        </Card>
      </Link> 
    )
}


export default ProductCard;