import Hero from "../components/Hero";
import pic1 from "../assets/img/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";
import {
  UsersIcon,
  NewspaperIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/20/solid";

const stats = [
  {
    id: 1,
    name: "Of those working in technology are women",
    value: "Only 19%",
  },
  {
    id: 2,
    name: "of the leadership in the techonology sector",
    value: "Only 5%",
  },
  { id: 3, name: "The gender pay gap", value: "9.6%" },
  {
    id: 4,
    name: "Of the Students taking Computer Science A-level courses are female",
    value: "Only 15%",
  },
];

const values = [
  {
    name: "Connect",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "Other women in tech to build a supportive and empowering community.",
  },
  {
    name: "Celebrate",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "and promote the achievement of women in tech - big and small.",
  },
  {
    name: "Challenge",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "the stereotypes and blockers that discourage women from working in STEM.",
  },
  {
    name: "Equip",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "Each other to fight the problems we face every day and promote gender equality in the workplace.",
  },
  {
    name: "Create",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "A powerhouse of role models who can champion future generations of women in tech.",
  },
];

const cards = [
  {
    name: "Atend to our events",
    description: "Find out more and what to expect at our events.",
    icon: UsersIcon,
  },
  {
    name: "Subscribe to our monthly newsletter",
    description:
      "For the latest Women in Tech news, what's going on in the wider Birmingham tech community, and much more delivered straight to your inbox.",
    icon: NewspaperIcon,
  },
  {
    name: "Follow us on socials",
    description:
      "And share with your network about our mission, upcoming events and more.",
    icon: GlobeAltIcon,
  },
  {
    name: "Speak at our events",
    description:
      "Share your expertise on a topic that will benefit attendees. Anything on leadership, management or even more technical expertise is welcome. SUbmit your topic here.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Host us",
    description:
      "If you're a corporate or local venue, find out how you can support us.",
    icon: BuildingOffice2Icon,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Did you know? */}
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Did you know?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">In the UK:</p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col bg-customPurple/40 p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl pb-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {values.map((value) => (
              <div key={value.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="h-24 w-28" src={value.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <h3 className="text-md font-semibold text-gray-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Get involved */}

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={pic1}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              How can you get involved
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-white/80 p-6 ring-1 ring-inset ring-white/10"
              >
                <card.icon
                  className="h-10 w-10 flex-none text-customPurple"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-purple-900">{card.name}</h3>
                  <p className="mt-2 text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact us */}

      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contact us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you have any questions, you&apos;d like to pitch an event idea, or
            for any other inquiries you can email us.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="mailto:womenintechbirmingham@gmail.com"
              className="text-base font-medium text-purple-900"
            >
              <span>womenintechbirmingham@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
