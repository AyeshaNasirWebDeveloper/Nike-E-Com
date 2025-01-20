import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";


const products = [
    { id: 1, filter: "Just In", name: "Nike Air Force 1 Mid '07", content: "Men's Shoe <br>1 Colour" ,price: "$120", image: "/products/card1.png" },
    { id: 2, filter: "Just In", name: "Nike Court Vision Low Next Nature", content: "Men's Shoe <br>1 Colour", price: "$100", image: "/products/card2.png" },
    { id: 3, filter: "Just In", name: "Nike Air Force 1 PLT.AF.ORM", content: "Women's Shoe <br>1 Colour", price: "$35", image: "/products/card3.png" },
    { id: 4, filter: "Just In", name: "Nike Air Force 1 React", content: "Men's Shoe <br>1 Colour", price: "$90", image: "/products/card4.png" },
    { id: 5, filter: "Promo Exclusion", name: "Air Jordan 1 Elevate Low", content: "Women's Shoe <br>1 Colour", price: "$25", image: "/products/card5.png" },
    { id: 6, filter: "Just In", name: "Nike Standard Issue", content: "Women's Shoe <br>1 Colour", price: "$110", image: "/products/card6.png" },
    { id: 7, filter: "Promo Exclusion", name: "Nike Dunk Low Retro SE", content: "Men's Shoe <br>1 Colour" ,price: "$120", image: "/products/card7.png" },
    { id: 8, filter: "Sustainable Materials", name: "Nike Dri-FIT UV Hyverse", content: "Men's Short-Sleeve Graphic Fitness Top <br>1 Colour", price: "$100", image: "/products/card8.png" },
    { id: 9, filter: "Just In", name: "Nike Court Vision Low", content: "Men's Shoe <br>1 Colour", price: "$35", image: "/products/card9.png" },
    { id: 10, filter: "Just In", name: "Nike Dri-FIT Ready", content: "Men's Short-Sleeve Fitness Top <br>3 Colours", price: "$90", image: "/products/card10.png" },
    { id: 11, filter: "Just In", name: "Nike One Leak Protection: Period", content: "Women's Mid-Rise 18cm (approx.) Biker Shorts <br>2 Colours", price: "$25", image: "/products/card11.png" },
    { id: 12, filter: "Just In", name: "Nike Air Force 1 LV8 3", content: "Older Kids' Shoe <br>1 Colour", price: "$110", image: "/products/card12.png" },
    { id: 13, filter: "Just In", name: "Nike Blazer Low Platform", content: "Women's Shoe <br>1 Colour" ,price: "$120", image: "/products/card13.png" },
    { id: 14, filter: "Just In", name: "Nike Air Force 1 '07", content: "Women's Shoe <br>2 Colours", price: "$100", image: "/products/card14.png" },
    { id: 15, filter: "Just In", name: "Nike Pro Dri-FIT", content: "Men's Tight-Fit Sleeveless Top <br>1 Colour", price: "$35", image: "/products/card15.png" },
    { id: 16, filter: "Just In", name: "Nike Dunk Low Retro", content: "Men's Shoe <br>1 Colour", price: "$90", image: "/products/card16.png" },
    { id: 17, filter: "Just In", name: "Nike Air Max SC", content: "Women's Shoe <br>2 Colours", price: "$25", image: "/products/card17.png" },
    { id: 18, filter: "Just In", name: "Nike Dri-FIT UV Miler", content: "Men's Short-Sleeve Running Top <br>1 Colour", price: "$110", image: "/products/card18.png" },
    { id: 19, filter: "Just In", name: "Nike Air Max SYSTM", content: "Older Kids' Shoes <br>1 Colour" ,price: "$120", image: "/products/card19.png" },
    { id: 20, filter: "Just In", name: "Nike Alate All U", content: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra <br>1 Colour", price: "$100", image: "/products/card20.png" },
    { id: 21, filter: "Just In", name: "Nike Court Legacy Lift", content: "Women's Shoe <br>2 Colours", price: "$35", image: "/products/card21.png" },
    { id: 22, filter: "Just In", name: "Nike Swoosh", content: "Women's Medium-support Padded Sports Bra Tank <br>2 Colours", price: "$90", image: "/products/card22.png" },
    { id: 23, filter: "Just In", name: "Nike SB Zoom Janoski OG+", content: "Shoes <br>1 Colour", price: "$25", image: "/products/card23.png" },
    { id: 24, filter: "Just In", name: "Nike Dri-FIT Run Division Rise 365", content: "Men's Running Tank <br>2 Colours", price: "$110", image: "/products/card24.png" },
    { id: 25, filter: "Just In", name: "Nike Dri-FIT Challenger", content: "Men's 18cm (approx.) 2-in-1 Versatile Shorts <br>1 Colour" ,price: "$120", image: "/products/card25.png" },
    { id: 26, filter: "Just In", name: "Jordan Series ES", content: "Men's Shoe <br>2 Colours", price: "$100", image: "/products/card26.png" },
    { id: 27, filter: "Just In", name: "Nike Outdoor Play", content: "Older Kids' Oversized Woven Jacket <br>1 Colour", price: "$35", image: "/products/card27.png" },
    { id: 28, filter: "Just In", name: "Nike Sportswear Trend", content: "Older Kids' (Girls') High-waisted Woven Shorts <br>2 Colours", price: "$90", image: "/products/card28.png" },
    { id: 29, filter: "Just In", name: "Nike Blazer Low '77 Jumbo", content: "Women's Shoe <br>1 Colour", price: "$25", image: "/products/card29.png" },
    { id: 30, filter: "Just In", name: "Nike SB Force 58", content: "Skate Shoe <br>1 Colour", price: "$110", image: "/products/card30.png" },
    
];

export default function ProductsCards() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]"
          key={product.id}
        >
          <Link href={`/products/${product.id}`}>
            <div className="relative h-[348px] w-full bg-[#F5F5F5]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </Link>
          <div className="p-4 space-y-2">
            {product.filter && (
              <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
                {product.filter}
              </span>
            )}
            <div className="space-y-1">
              <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                {product.name}
              </h3>
              <p
                className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']"
                dangerouslySetInnerHTML={{ __html: product.content }}
              ></p>
            </div>
            <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
              Price: {product.price}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
