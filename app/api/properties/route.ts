import { NextResponse } from "next/server";

const properties = [
  {
    id: 1,
    title: "Palm Residency",
    location: "Mumbai",
    price: "₹ 2.9 Cr",
    bhk: "2 & 3",
    type: "buy",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    id: 2,
    title: "Runwal Woods",
    location: "Borivali",
    price: "₹ 45,000 / month",
    bhk: "3",
    type: "rent",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  },
  {
    id: 3,
    title: "Godrej Eternal Palms",
    location: "Andheri",
    price: "₹ 7 Cr - ₹ 10 Cr",
    bhk: "4",
    type: "buy",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    id: 4,
    title: "Lodha Aureus",
    location: "Sewri, Mumbai",
    price: "₹ 4.6 Cr - ₹ 5 Cr",
    bhk: "2",
    type: "buy",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },

  {
    id: 5,
    title: "Oberoi Sky Heights",
    location: "Borivali East",
    price: "₹ 3.2 Cr",
    bhk: "3",
    type: "buy",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  },
  {
    id: 6,
    title: "Hiranandani Atlantis",
    location: "Powai",
    price: "₹ 1.2 L / month",
    bhk: "3",
    type: "rent",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    id: 7,
    title: "Raheja Imperia",
    location: "Lower Parel",
    price: "₹ 5.5 Cr",
    bhk: "3",
    type: "buy",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  {
    id: 8,
    title: "Kanakia Silicon Valley",
    location: "Powai",
    price: "₹ 2.1 Cr",
    bhk: "1",
    type: "buy",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  {
    id: 9,
    title: "Rustomjee Urbania",
    location: "Thane West",
    price: "₹ 38,000 / month",
    bhk: "2",
    type: "rent",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
  },
  {
    id: 10,
    title: "Kalpataru Avana",
    location: "Parel",
    price: "₹ 6.8 Cr",
    bhk: "3 & 4",
    type: "buy",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  },
  {
    id: 11,
    title: "Ajmera Zeon",
    location: "Wadala East",
    price: "₹ 2.5 Cr",
    bhk: "2",
    type: "buy",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118"
  },
  {
    id: 12,
    title: "L&T Crescent Bay",
    location: "Parel",
    price: "₹ 90,000 / month",
    bhk: "3",
    type: "rent",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 13,
    title: "Mahindra Vicino",
    location: "Andheri East",
    price: "₹ 1.8 Cr",
    bhk: "2",
    type: "buy",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
  },
  {
    id: 14,
    title: "Sheth Vasant Oasis",
    location: "Andheri East",
    price: "₹ 55,000 / month",
    bhk: "2",
    type: "rent",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
  }
];

export async function GET() {
  return NextResponse.json(properties);
}