import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"

export default function ShoeOrder() {
  return (
    (<div className="px-4 md:px-6 py-6">
      <div
        className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
        <div className="grid gap-4">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="Shoe Image"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src="/placeholder.svg"
                  width={600} />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Shoe Image"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src="/placeholder.svg"
                  width={600} />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Shoe Image"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src="/placeholder.svg"
                  width={600} />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="Shoe Image"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src="/placeholder.svg"
                  width={600} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext  />
          </Carousel>
        </div>
        <div className="grid gap-4 md:gap-10">
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl">Acme Leather Sneakers</h1>
            <div className="text-3xl text-secondary font-bold">999,999 THB</div>
          </div>
          <form className="grid gap-4 md:gap-6">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="9" id="size">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-7">
                  <RadioGroupItem id="size-7" value="7" />
                  7
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-8">
                  <RadioGroupItem id="size-8" value="8" />
                  8
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-9">
                  <RadioGroupItem id="size-9" value="9" />
                  9
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-10">
                  <RadioGroupItem id="size-10" value="10" />
                  10
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-11">
                  <RadioGroupItem id="size-11" value="11" />
                  11
                </Label>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 mr-5">
                <Button className="px-4 py-2 rounded" variant="outline">
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="text-2xl font-bold">1</span>
                <Button className="px-4 py-2 rounded" variant="outline">
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
              <Button size="lg">Add to Cart</Button>
            </div>
          </form>
          <div>
            <h1 className="font-bold text-lg lg:text-xl">Product Detail</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Crafted with premium leather and a comfortable sole, these sneakers are perfect for everyday wear.
            </p>
            
          </div>
        </div>
      </div>
    </div>)
  );
}

function MinusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}
