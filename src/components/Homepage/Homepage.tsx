import { PropsWithChildren } from "react";
import styles from "./style.module.scss";
import listingData from "@/../data/mock/listing";
import { adapter } from "@/adapters/listing";
import IPropertyListing from "@/interfaces/IPropertyListing";
import PropertyCard from "../PropertyCard/PropertyCard";

// mockup fetching
async function getListing() {
  return listingData;
}

export default async function Homepage(props: PropsWithChildren) {
  const { result } = await getListing();
  const listings: IPropertyListing[] = result.map((r) => adapter(r));

  return (
    <main className={styles["homepage"]}>
      <div className={styles["listing-row"]}>
        {listings.map((listing) => (
          <div className={styles["listing-col"]}>
            <PropertyCard {...listing} />
          </div>
        ))}
      </div>
    </main>
  );
}
