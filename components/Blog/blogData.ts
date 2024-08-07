import type { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    link: "#",
    title: "How MB Academy Helped this Alum transistion to a Backend Engineer",
    paragraph:
      "Embarking on a new career path can be daunting, especially when switching from a role in resource management to backend engineering. For one alum, Masteringbackend Academy was the catalyst for this transformation.",
    image: "/images/blog/photo1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    link: "https://masteringbackend.com/posts/top-5-best-backend-bootcamps-and-why",
    title: "Top 5 Best Backend Bootcamps and Why",
    paragraph:
      "When it comes to mastering backend development, choosing the right bootcamp can make all the difference. Here are the top 5 best backend bootcamps and why they stand out:",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image:
        "https://strapi-images-aws-s3.s3.us-west-2.amazonaws.com/Top_5_Best_Backend_Bootcamps_and_Why_6aea8ea951.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    link: "#",
    id: 3,
    title: "10 Highest Paying Tech Careers in 2024",
    paragraph:
      "In the rapidly evolving tech industry, certain careers stand out for their lucrative compensation packages. Here are the top 10 highest paying tech careers in 2024:",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Solomon Eseme",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
