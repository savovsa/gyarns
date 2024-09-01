'use client'

import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <YarnIcon className="h-6 w-6" />
          <span className="sr-only">Yarn Store</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Collections
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Yarn Paradise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the perfect yarn for your next project. From luxurious wool to vibrant acrylics, we have it all.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Merino Wool Blend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Yarn product image"
                      className="w-full h-60 object-cover"
                      height="240"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "320/240",
                        objectFit: "cover",
                      }}
                      width="320"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">100g / 3.5oz</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-lg font-bold">$12.99</span>
                    <Button variant="outline">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>Luxury Alpaca Yarn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Luxury yarn product image"
                      className="w-full h-80 object-cover mb-4"
                      height="320"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "320/320",
                        objectFit: "cover",
                      }}
                      width="320"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Indulge in the softness of our premium alpaca yarn. Perfect for luxurious scarves and sweaters.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
                    <span className="text-lg font-bold">$24.99</span>
                    <Button>Shop Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Shop by Collection</h2>
            <Tabs defaultValue="winter" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="winter">Winter Warmth</TabsTrigger>
                <TabsTrigger value="spring">Spring Breeze</TabsTrigger>
                <TabsTrigger value="summer">Summer Delight</TabsTrigger>
              </TabsList>
              <TabsContent value="winter">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Cozy Wool Yarn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          alt="Winter yarn product"
                          className="w-full h-60 object-cover"
                          height="240"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "320/240",
                            objectFit: "cover",
                          }}
                          width="320"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Product</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="spring">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Light Cotton Blend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          alt="Spring yarn product"
                          className="w-full h-60 object-cover"
                          height="240"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "320/240",
                            objectFit: "cover",
                          }}
                          width="320"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Product</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="summer">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Breezy Linen Yarn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          alt="Summer yarn product"
                          className="w-full h-60 object-cover"
                          height="240"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "320/240",
                            objectFit: "cover",
                          }}
                          width="320"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Product</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Yarn Paradise. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function YarnIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="14" r="7" />
      <path d="M10.3 21a10 10 0 1 1 9.4-13.8" />
      <path d="M6 11.4a7 7 0 0 1 3.5-5.8" />
      <path d="M2.2 17.8a7 7 0 0 0 8.7-7.3" />
      <path d="M14 10a7 7 0 0 1-1.3 4" />
      <path d="M7.5 17.7a7 7 0 0 0 5.5-5.3" />
    </svg>
  )
}