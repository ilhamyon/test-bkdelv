import Container from "@/components/Container";
import Link from "next/link";

export default function PromotionsPage() {
  return <Container title="Promotions">
    <section className="py-7 center-container p-1">
      <Link href="/">
        <a>
           <img
              className="w-full"
              src="assets/images/slide1.jpg"></img>
        </a>
      </Link>
    </section>
  </Container>;
}
