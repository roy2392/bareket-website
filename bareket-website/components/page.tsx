'use client'

import { ShoppingCart, Search, Menu, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import goldenring from '/media/goldern-ring.jpeg'
import diamondring from '/media/diamond-ring.jpeg'

// WhatsApp number for sharing (replace with your actual number)
const WHATSAPP_NUMBER = '+972544281384'

interface JewelryItem {
  id: number
  name: string
  description: string
  image: StaticImageData
}

const jewelryItems: JewelryItem[] = [
  {
    id: 1,
    name: 'שרשרת יהלום קלאסית',
    description: 'שרשרת יהלום עדינה ואלגנטית, מושלמת לכל אירוע',
    image: diamondring
  },
  {
    id: 2,
    name: 'טבעת זהב מעוצבת',
    description: 'טבעת זהב ייחודית בעיצוב מודרני',
    image: goldenring
  },
  {
    id: 3,
    name: 'עגילי פנינה יוקרתיים',
    description: 'עגילי פנינה איכותיים בעיצוב קלאסי',
    image: '/placeholder.svg?height=300&width=400'
  }
]

export function Page() {
  const shareOnWhatsApp = (item: JewelryItem) => {
    const message = encodeURIComponent(`היי, אני מעוניין/ת במוצר "${item.name}" מחנות ברקת. אפשר לקבל פרטים נוספים?`)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">ברקת</h1>
          <nav className="hidden lg:flex space-x-8 space-x-reverse">
            <Link href="#" className="text-gray-600 hover:text-gray-800">דף הבית</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">חנות</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">אודות</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">צור קשר</Link>
          </nav>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button>
              <Search className="h-6 w-6 text-gray-600" />
            </button>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">הקולקציה החדשה שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jewelryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => shareOnWhatsApp(item)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center"
                    >
                      <Share2 className="h-5 w-5 mr-2" />
                      שתף בוואטסאפ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">קטגוריות פופולריות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['טבעות', 'שרשראות', 'עגילים', 'צמידים'].map((category) => (
              <Link href="#" key={category} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <Image src={`/placeholder.svg?height=100&width=100`} alt={category} width={100} height={100} className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ברקת</h3>
              <p className="text-gray-400">תכשיטים יפים לכל אירוע</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">קישורים מהירים</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">מדיניות משלוחים</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">מדיניות החזרות</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">שאלות נפוצות</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">הישארו מעודכנים</h3>
              <form className="flex">
                <input type="email" placeholder="כתובת אימייל" className="bg-gray-700 text-white px-4 py-2 rounded-r-md focus:outline-none" />
                <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-l-md hover:bg-pink-600 transition-colors">הרשמה</button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 ברקת. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}