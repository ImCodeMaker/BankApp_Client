"use client";
import { CarouselTypes } from "@/types/CarouselTypes";
import { Inter } from "next/font/google";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import CreditCardImage from "@/assets/CreditCard.png";
import BankAccountImage from "@/assets/BankAccount.png";
import Loans from "@/assets/Loans.png";
import Traveling from "@/assets/Traveling.png";
import InternationalAccounts from "@/assets/InternationalAccounts.png";
import Image from "next/image";
import { BigCards } from "@/components/BigCards";
import VacationImage from "@/assets/Vactions.jpg";
import { PerksTypes } from "@/types/PerksTypes";
import { PerksComponent } from "@/components/PerksComponents";
import OnlineBanking from "@/assets/OnlineBanking.jpg"
import MonthlyFeee from "@/assets/MonthlyFee.jpg"
import LoansPerMonth from "@/assets/Loans.jpg"
import cashBacks from "@/assets/CashBacks.jpg"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const PerkList: PerksTypes[] = [
  {
    name: "Travel Without Worries",
    image: VacationImage,
    description:
      "Travel worry-free with our vacation banking services. Get travel insurance, no foreign transaction fees, emergency cash access, and 24/7 customer support worldwide.",
    direction: "Right",
  },
  {
    name: "Easy Online Banking",
    image: OnlineBanking,
    description:
      "Bank from anywhere with our user-friendly mobile app and website. Check balances, transfer money, pay bills, and deposit checks right from your phone.",
    direction: "Left",
  },
  {
    name: "No Monthly Fees",
    image: MonthlyFeee,
    description:
      "Keep more of your money with our fee-free checking accounts. No minimum balance requirements, no monthly maintenance fees, and free ATM access at thousands of locations.",
    direction: "Right",
  },
  {
    name: "Quick Personal Loans",
    image: LoansPerMonth,
    description:
      "Get the funds you need with our simple personal loan process. Competitive rates, quick approval, and flexible payment terms for all your financial needs.",
    direction: "Left",
  },
  {
    name: "Cashback Rewards",
    image: cashBacks,
    description:
      "Earn cash back on your everyday purchases with our rewards debit and credit cards. Get money back on groceries, gas, dining, and streaming services with no annual fee.",
    direction: "Right",
  },
];

const CarouselList: CarouselTypes[] = [
  {
    name: "Credit Cards",
    image: CreditCardImage,
    description:
      "Flexible credit solutions with competitive rates, rewards programs, and worldwide acceptance. Build your credit while enjoying purchase protection and exclusive benefits.",
  },
  {
    name: "Bank Accounts",
    image: BankAccountImage,
    description:
      "Secure checking and savings accounts with mobile banking, no monthly fees, and 24/7 access to your money. FDIC insured up to $250,000.",
  },
  {
    name: "Loans",
    image: Loans,
    description:
      "Personal, auto, and home loans with competitive interest rates and flexible repayment terms. Quick approval process and dedicated loan specialists.",
  },
  {
    name: "Travel & Use your money anywhere!",
    image: Traveling,
    description:
      "Global banking solutions with no foreign transaction fees, currency exchange services, and access to ATMs worldwide. Perfect for international travelers.",
  },
  {
    name: "International Accounts",
    image: InternationalAccounts,
    description:
      "Multi-currency accounts for global banking needs. Manage finances across countries with seamless transfers and competitive exchange rates.",
  },
];
function Home() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const selectedItem = useMemo(
    () => CarouselList[carouselIndex],
    [carouselIndex]
  );

  const updateCarousel = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCarouselIndex((prev) => (prev + 1) % CarouselList.length);
        setIsAnimating(false);
      }, 150); // Half the transition duration
    }
  }, [isAnimating]);

  useEffect(() => {
    const intervalId = setInterval(updateCarousel, 10000);
    return () => clearInterval(intervalId);
  }, [updateCarousel]);

  return (
    <>
      <section className="min-h-screen w-full bg-white flex items-start justify-center overflow-hidden pt-20">
        <div className="w-full max-w-6xl px-8 bg-white drop-shadow-2xl rounded-md py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section with Crossfade */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative text-center lg:text-left">
                <motion.h1
                  key={carouselIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className={`text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-lg ${inter.className}`}
                >
                  {selectedItem.name}
                </motion.h1>
              </div>
            </div>

            {/* Image Section with Crossfade */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 overflow-hidden">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={selectedItem.image}
                    width={500}
                    height={500}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-evenly items-center flex-col">
        <h1 className="text-3xl font-bold">Products</h1>
        <span className="text-black text-lg">
          Discover our complete range of financial solutions
        </span>
        <div className="mt-24 grid grid-cols-3 gap-10 mx-auto ">
          {CarouselList.slice(0, 3).map((items, key) => (
            <div
              key={key}
              className="transition-all delay-75 duration-500 ease-out hover:-translate-y-2 hover:scale-105"
            >
              <BigCards
                name={items.name}
                image={items.image}
                description={items.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-evenly space-x-10 ">
          {CarouselList.slice(3, 5).map((items, key) => (
            <div
              key={key}
              className="transition-all delay-75 duration-500 ease-out hover:-translate-y-2 hover:scale-105"
            >
              <BigCards
                name={items.name}
                image={items.image}
                description={items.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 flex justify-center items-center flex-col">
        <h1 className="text-black text-3xl font-bold">Benefits</h1>
        <span className="text-black text-lg">
          Come and see some of our perks
        </span>

        <div className="mt-24">
          {PerkList.map((item, key) => (
            <div key={key} className="mt-10">
              <PerksComponent
                name={item.name}
                image={item.image}
                description={item.description}
                direction={item.direction}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
