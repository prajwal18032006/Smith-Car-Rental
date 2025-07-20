import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const priceMap: Record<string, string> = {
  "Mahalaxmi Temple": "₹1200",
  "Rankala Lake": "₹800",
  "New Palace": "₹1500",
  "Jyotiba Temple": "₹1800",
  "Kopeshwar Temple": "₹2500",
  "Ganpatipule": "₹3500",
  "Kaneri Math": "₹1000",
  "Sindhudurg Fort": "₹4000",
  "Balumamachi Wadi": "₹1600",
  "Malvan": "₹4200",
  "Narsobachi Wadi": "₹1400",
  "Ramlinga": "₹900",
  "Sanglicha Ganpati": "₹1300",
  "Vishalgad Fort": "₹3800",

  "Sangli": "₹2500",
  "Satara": "₹2999",
  "Goa": "₹8000",
  "Mumbai": "₹8999",
  "Pune": "₹8000",
  "Mahabaleshwar": "₹5999",
  "Belgaum": "₹2999",
  
  // Car categories with their prices
  "Kia Carens": "₹1,800/day",
  "Hyundai Xcent": "₹2,200/day",
  "Toyota Crista": "₹3,200/day"
};

export default function GetQuoteButton({ placeName }: { placeName: string }) {
  const [quoteText, setQuoteText] = useState("Get Quote");
  const handleQuoteClick = () => {
    setQuoteText(priceMap[placeName] || "₹2999");
  };
  return (
    <Button
      size="sm"
      variant="outline"
      className="flex-1"
      onClick={handleQuoteClick}
    >
      {quoteText}
    </Button>
  );
}
