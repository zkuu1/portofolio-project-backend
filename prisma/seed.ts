import { PrismaClient, Prisma } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

/**
 * DATA SEED
 */
const projectData: Prisma.ProjectCreateInput[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js",
    categories: "Web",
    imageUrl: "https://example.com/portfolio.png",
    projectUrl: "https://portfolio.dev",
    icons: {
      create: [
        {
          name: "NextJS",
          iconUrl: "https://example.com/icons/nextjs.svg",
        },
        {
          name: "Tailwind",
          iconUrl: "https://example.com/icons/tailwind.svg",
        },
      ],
    },
  },
  {
    title: "Mobile App",
    description: "React Native mobile application",
    categories: "Mobile",
    imageUrl: "https://example.com/mobile.png",
    projectUrl: "https://mobile.dev",
    icons: {
      create: [
        {
          name: "React Native",
          iconUrl: "https://example.com/icons/react-native.svg",
        },
        {
          name: "Firebase",
          iconUrl: "https://example.com/icons/firebase.svg",
        },
      ],
    },
  },
  {
    title: "Backend API",
    description: "REST API using Node.js",
    categories: "Backend",
    imageUrl: "https://example.com/api.png",
    projectUrl: "https://api.dev",
    icons: {
      create: [
        {
          name: "NodeJS",
          iconUrl: "https://example.com/icons/nodejs.svg",
        },
      ],
    },
  },
];

const testimonialData: Prisma.TestimonialCreateInput[] = [
  {
    name: "Jane Doe",
    content: "Great to work with, highly recommended!",
    avatarUrl: "https://example.com/avatars/jane.png",
  },
  {
    name: "John Smith",
    content: "Delivered the project on time and exceeded expectations.",
    avatarUrl: "https://example.com/avatars/john.png",
  }
]

const chatData: Prisma.ChatCreateInput[] = [
  {
    name: "Mas Amba",
    email: "amba@gmail.com",
    message: "Hello nice to meet you!",
  },
  {
    name: "Mas Fuad",
    email: "fuad@gmail.com",
    message: "Jomokers!",
  },
  {
    name: "Mas Ironi",
    email: "ironi@gmail.com",
    message: "Jomokers!",
  },
]

/**
 * SEED RUNNER
 */
export async function main() {
  for (const project of projectData) {
    await prisma.project.create({
      data: {
        ...project,
      },
    });
  }

  for (const testimonial of testimonialData) {
    await prisma.testimonial.create({
      data: {
        ...testimonial,
      },
    });
  }

  for (const chat of chatData) {
    await prisma.chat.create({
      data: {
        ...chat,  
      }
    });
  }
}

main()
  .then(() => {
    console.log("Seeding finished.");
  })
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
