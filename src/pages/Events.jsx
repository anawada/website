import {
  ArrowRightCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

import pic1 from "../assets/img/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg";

const eventDetails = [
  {
    description: "We aim to run our events on a monthly basis with each taking a different format - guest speakers, workshops, networking and much more",
  },
  {
    description: "Some of our events have a limited number of attendance spaces due to constraints with our venues. Because of this, we ask attendees to RSVP ahead of the event so that we can best plan for numbers.",
  },
  {
    description: "If you can no longer attend, please do change your RSVP to No ahead of the event. Read more about our No Show Policy here",
  },
  {
    description: "The event venue will be detailed in the event description - it varies from event to event but will always be in a central Birmingham location",
  },
  {
    description: "Whether food and drink is provided depends on the venue - in some cases you will be welcome to bring your own (see the event details for more information)",
  },
  {
    description: "Each event we have a mix of first- time attendees and regulars - so if this is your first time, you won't be the only one and everyone is very friendly and welcoming!",
  },
  {
    description: "We do not tolerate any harassment or discrimination at our events and we ask all attendees to read and abide by our Code of Conduct",
  },
  {
    description: "If you have questions or concerns or contact us via email here",
  },
];

export default function Events() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Events
        </h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {eventDetails.map((event, index) => (
              <li key={index} className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-customPurple"
                  aria-hidden="true"
                />
                <span>{event.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={pic1}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Disclaimer
          </h2>
          <p className="mt-6">
            All women with an interest in tech are welcome to attend our events.
            We also welcome other minority genders in tech who want to attend,
            but the organisers recognise that, as cisgender women, we are not
            able to speak about the unique difficulties that non-binary or other
            gender diverse people face.
          </p>
        </div>
      </div>
    </div>
  );
}