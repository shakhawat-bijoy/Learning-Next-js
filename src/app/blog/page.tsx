import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  }
};

export default function blog() {
 return (
   <div>
    <h1>my blog</h1>
   </div>
 );
} 