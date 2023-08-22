"use client";

import { hidePhone } from "@/lib/helpers";
import IPropertyListing from "@/interfaces/IPropertyListing";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export default function DescriptionToggler({
  description,
}: Pick<IPropertyListing, "description">) {
  const [showDesc, setShowDesc] = useState<boolean>(false);
  const elRef = useRef<HTMLDivElement>(null);
  const btnText = showDesc ? "Hide Description" : "See Description";

  function onClickCallback(event: Event) {
    const target = event?.target as HTMLElement;
    if (target.classList.contains("phone-number-toggle")) {
      const phoneNumber = target.getAttribute("data-phone-number");
      target.innerHTML = phoneNumber as string;
    }
  }

  useEffect(() => {
    if (elRef.current) {
      elRef.current?.addEventListener("click", onClickCallback);
    }

    return () => {
      elRef.current?.removeEventListener("click", onClickCallback);
    };
  }, []);

  return (
    <div ref={elRef} className={styles["description-toggler"]}>
      <button
        className={styles["description-toggler__desc"]}
        role="button"
        onClick={() => setShowDesc((prev) => !prev)}
      >
        {btnText}
      </button>
      <div
        className={`${styles["description-toggler__content"]} ${
          styles[showDesc ? "block" : "hidden"]
        }`}
        dangerouslySetInnerHTML={{
          __html: hidePhone(description, [" ", "", "-"]),
        }}
      />
    </div>
  );
}
