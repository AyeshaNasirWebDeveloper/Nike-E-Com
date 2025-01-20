import Image from "next/image"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
  <div className="w-full max-w-7xl mx-auto mb-[84px]">
  {/* Main Product Image Section */}
  <div className="w-full lg-h-[700px] h-[400px] mt-10 lg-mb-16  relative md:h-[600px] sm-[300px] ">
    
    <Image
      src="/heroImage.png"
      alt="Nike Air Max Pulse"
      layout="fill"
      objectFit="cover"
      className="-mt-[24px] object-cover rounded-lg h-48 w-96 hover:animate-pulse"
      priority
    />
  </div>

  {/* Content Section */}
  <div className="max-w-4xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8">
    <span className="text-sm font-medium text-gray-900">First Look</span>
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 uppercase">
      Nike Air Max Pulse
    </h1>
    
    <p className="text-base text-gray-600 max-w-xl mx-auto">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex items-center justify-center gap-3 pt-4">
      <Button
        variant="default"
        className="rounded-full px-6 py-2 text-sm sm:text-base hover:bg-white hover:text-black "
      >
        Notify Me
      </Button>
      <Button
        variant="default"
        className="rounded-full px-6 py-2 text-sm sm:text-base hover:bg-white hover:text-black"
      >
        Shop Air Max
      </Button>
    </div>
  </div>
</div>


  )
}

export default Hero