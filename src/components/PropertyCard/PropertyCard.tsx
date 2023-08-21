import IPropertyListing from "@/interfaces/IPropertyListing";
// import ImageSlider from "../../client/ImageSlider/ImageSlider";
import styles from "./style.module.scss";
import { usdMoney } from "@/lib/helpers";
// import DescriptionToggler from "@/components/client/DescriptionToggler/DescriptionToggler";

export default function PropertyCard(props: IPropertyListing) {
  return (
    <section className={styles["property-card"]}>
      <div className={styles["property-card__thumbnail"]}>
        <div className={styles["badge"]}>
          <BadgeIcon />
        </div>
        {/* <ImageSlider images={pics} /> */}
      </div>
      <article className={styles["property-card__content"]}>
        <div className="flex flex-wrap flex-col lg:flex-row mb-3">
          <div className="flex gap-4 flex-wrap flex-1 mb-5 lg:mb-0">
            <div className="w-auto">
              <BuildingIcon />
            </div>
            <div className="flex md:-mt-1 flex-col flex-1">
              <div className={styles["title"]} aria-label={props.title}>
                {props.title}
              </div>
              <div className={styles["address"]} aria-label={props.address}>
                {props.address}
              </div>
            </div>
            <div className={styles["other-info"]}>
              {props.projectType} · {props.year} · {props.ownershipType} <br />
              {props.availabilitiesLabel}
            </div>
          </div>
          <div className="flex lg:ml-auto items-center lg:items-end gap-3 lg:gap-0 lg:flex-col lg:text-right">
            <div className={styles["price"]} aria-label="Price range">
              <span aria-label={`Start price ${props.psfMin}`}>
                {usdMoney(props.psfMin)}
              </span>{" "}
              -{" "}
              <span aria-label={`End price ${props.psfMax}`}>{usdMoney(props.psfMax)}</span>{" "}
              psf
            </div>
            <div className={styles["price-from"]} aria-label={props.subpriceLabel}>
              {props.subpriceLabel}
            </div>
          </div>
        </div>
        {/* <DescriptionToggler description={description} /> */}
      </article>
    </section>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="134"
      height="25"
      viewBox="0 0 134 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_469)">
        <g clipPath="url(#clip1_1_469)">
          <path d="M0 2C0 0.89543 0.89543 0 2 0H124V21H0V2Z" fill="#FF72B6" />
          <path
            d="M5.936 6.004H7.448V13.156H11.06V14.5H5.936V6.004ZM15.1289 6.004H16.4369L20.0969 14.5H18.3689L17.5769 12.556H13.8929L13.1249 14.5H11.4329L15.1289 6.004ZM17.0489 11.26L15.7409 7.804L14.4089 11.26H17.0489ZM27.9415 11.38C27.9415 11.892 27.8535 12.356 27.6775 12.772C27.5015 13.18 27.2615 13.528 26.9575 13.816C26.6535 14.104 26.2935 14.328 25.8775 14.488C25.4615 14.64 25.0095 14.716 24.5215 14.716C24.0335 14.716 23.5815 14.64 23.1655 14.488C22.7495 14.328 22.3855 14.104 22.0735 13.816C21.7695 13.528 21.5295 13.18 21.3535 12.772C21.1855 12.356 21.1015 11.892 21.1015 11.38V6.004H22.6135V11.32C22.6135 11.568 22.6455 11.816 22.7095 12.064C22.7735 12.304 22.8775 12.52 23.0215 12.712C23.1735 12.904 23.3695 13.06 23.6095 13.18C23.8575 13.3 24.1615 13.36 24.5215 13.36C24.8815 13.36 25.1815 13.3 25.4215 13.18C25.6695 13.06 25.8655 12.904 26.0095 12.712C26.1615 12.52 26.2695 12.304 26.3335 12.064C26.3975 11.816 26.4295 11.568 26.4295 11.32V6.004H27.9415V11.38ZM30.1399 6.004H32.1439L36.0919 12.364H36.1159V6.004H37.6279V14.5H35.7079L31.6759 7.936H31.6519V14.5H30.1399V6.004ZM46.0352 7.996C45.8112 7.692 45.5192 7.472 45.1592 7.336C44.7992 7.192 44.4472 7.12 44.1032 7.12C43.6632 7.12 43.2632 7.2 42.9032 7.36C42.5432 7.52 42.2312 7.74 41.9672 8.02C41.7112 8.3 41.5112 8.628 41.3672 9.004C41.2312 9.38 41.1632 9.788 41.1632 10.228C41.1632 10.692 41.2312 11.116 41.3672 11.5C41.5032 11.884 41.6952 12.216 41.9432 12.496C42.1992 12.768 42.5032 12.98 42.8552 13.132C43.2072 13.284 43.6032 13.36 44.0432 13.36C44.4992 13.36 44.9032 13.272 45.2552 13.096C45.6072 12.912 45.8912 12.672 46.1072 12.376L47.3192 13.228C46.9432 13.7 46.4832 14.068 45.9392 14.332C45.3952 14.588 44.7592 14.716 44.0312 14.716C43.3672 14.716 42.7552 14.608 42.1952 14.392C41.6432 14.168 41.1672 13.86 40.7672 13.468C40.3672 13.068 40.0552 12.596 39.8312 12.052C39.6072 11.5 39.4952 10.892 39.4952 10.228C39.4952 9.548 39.6112 8.936 39.8432 8.392C40.0832 7.84 40.4072 7.372 40.8152 6.988C41.2312 6.604 41.7192 6.308 42.2792 6.1C42.8392 5.892 43.4472 5.788 44.1032 5.788C44.3752 5.788 44.6592 5.816 44.9552 5.872C45.2512 5.92 45.5352 6 45.8072 6.112C46.0792 6.216 46.3352 6.348 46.5752 6.508C46.8152 6.668 47.0192 6.86 47.1872 7.084L46.0352 7.996ZM48.6587 6.004H50.1707V9.436H54.1427V6.004H55.6547V14.5H54.1427V10.732H50.1707V14.5H48.6587V6.004ZM57.9298 6.004H59.4418V14.5H57.9298V6.004ZM61.7165 6.004H63.7205L67.6685 12.364H67.6925V6.004H69.2045V14.5H67.2845L63.2525 7.936H63.2285V14.5H61.7165V6.004ZM78.9197 14.056C78.4877 14.264 78.0117 14.424 77.4917 14.536C76.9797 14.656 76.3877 14.716 75.7157 14.716C75.0277 14.716 74.3997 14.608 73.8317 14.392C73.2637 14.168 72.7757 13.86 72.3677 13.468C71.9597 13.068 71.6397 12.596 71.4077 12.052C71.1837 11.5 71.0717 10.892 71.0717 10.228C71.0717 9.548 71.1877 8.936 71.4197 8.392C71.6597 7.84 71.9837 7.372 72.3917 6.988C72.8077 6.604 73.2957 6.308 73.8557 6.1C74.4157 5.892 75.0237 5.788 75.6797 5.788C76.3597 5.788 76.9797 5.888 77.5397 6.088C78.1077 6.28 78.5637 6.536 78.9077 6.856L77.8637 7.984C77.6477 7.744 77.3437 7.54 76.9517 7.372C76.5677 7.204 76.1477 7.12 75.6917 7.12C75.2437 7.12 74.8357 7.2 74.4677 7.36C74.1077 7.52 73.7997 7.74 73.5437 8.02C73.2877 8.3 73.0877 8.628 72.9437 9.004C72.8077 9.38 72.7397 9.788 72.7397 10.228C72.7397 10.684 72.8077 11.104 72.9437 11.488C73.0877 11.864 73.2877 12.192 73.5437 12.472C73.8077 12.752 74.1237 12.972 74.4917 13.132C74.8677 13.284 75.2917 13.36 75.7637 13.36C76.4117 13.36 76.9757 13.26 77.4557 13.06V10.9H75.6677V9.652H78.9197V14.056ZM88.893 7.78C88.733 7.572 88.505 7.4 88.209 7.264C87.921 7.12 87.629 7.048 87.333 7.048C87.157 7.048 86.981 7.072 86.805 7.12C86.629 7.16 86.469 7.228 86.325 7.324C86.181 7.412 86.061 7.532 85.965 7.684C85.877 7.828 85.833 8.004 85.833 8.212C85.833 8.404 85.873 8.568 85.953 8.704C86.033 8.84 86.141 8.956 86.277 9.052C86.421 9.148 86.593 9.232 86.793 9.304C86.993 9.376 87.213 9.448 87.453 9.52C87.725 9.608 88.005 9.708 88.293 9.82C88.589 9.932 88.857 10.08 89.097 10.264C89.345 10.448 89.545 10.68 89.697 10.96C89.857 11.24 89.937 11.588 89.937 12.004C89.937 12.46 89.853 12.86 89.685 13.204C89.517 13.54 89.293 13.82 89.013 14.044C88.733 14.268 88.405 14.436 88.029 14.548C87.653 14.66 87.257 14.716 86.841 14.716C86.289 14.716 85.749 14.616 85.221 14.416C84.693 14.208 84.261 13.904 83.925 13.504L85.005 12.496C85.213 12.784 85.489 13.012 85.833 13.18C86.185 13.348 86.529 13.432 86.865 13.432C87.041 13.432 87.221 13.412 87.405 13.372C87.589 13.324 87.753 13.248 87.897 13.144C88.049 13.04 88.169 12.912 88.257 12.76C88.353 12.6 88.401 12.404 88.401 12.172C88.401 11.948 88.349 11.764 88.245 11.62C88.141 11.468 88.001 11.34 87.825 11.236C87.649 11.124 87.441 11.028 87.201 10.948C86.961 10.868 86.709 10.784 86.445 10.696C86.189 10.616 85.933 10.52 85.677 10.408C85.421 10.296 85.189 10.148 84.981 9.964C84.781 9.78 84.617 9.556 84.489 9.292C84.361 9.02 84.297 8.684 84.297 8.284C84.297 7.852 84.385 7.48 84.561 7.168C84.745 6.856 84.981 6.6 85.269 6.4C85.565 6.192 85.897 6.04 86.265 5.944C86.641 5.84 87.021 5.788 87.405 5.788C87.837 5.788 88.273 5.864 88.713 6.016C89.161 6.168 89.549 6.396 89.877 6.7L88.893 7.78ZM91.4436 10.228C91.4436 9.548 91.5556 8.936 91.7796 8.392C92.0116 7.84 92.3276 7.372 92.7276 6.988C93.1356 6.604 93.6156 6.308 94.1676 6.1C94.7276 5.892 95.3356 5.788 95.9916 5.788C96.6556 5.788 97.2676 5.892 97.8276 6.1C98.3876 6.308 98.8716 6.604 99.2796 6.988C99.6876 7.372 100.004 7.84 100.228 8.392C100.46 8.936 100.576 9.548 100.576 10.228C100.576 10.892 100.46 11.5 100.228 12.052C100.004 12.596 99.6876 13.068 99.2796 13.468C98.8716 13.86 98.3876 14.168 97.8276 14.392C97.2676 14.608 96.6556 14.716 95.9916 14.716C95.3356 14.716 94.7276 14.608 94.1676 14.392C93.6156 14.168 93.1356 13.86 92.7276 13.468C92.3276 13.068 92.0116 12.596 91.7796 12.052C91.5556 11.5 91.4436 10.892 91.4436 10.228ZM93.0876 10.228C93.0876 10.684 93.1556 11.104 93.2916 11.488C93.4356 11.864 93.6356 12.192 93.8916 12.472C94.1556 12.752 94.4636 12.972 94.8156 13.132C95.1756 13.284 95.5716 13.36 96.0036 13.36C96.4356 13.36 96.8316 13.284 97.1916 13.132C97.5516 12.972 97.8596 12.752 98.1156 12.472C98.3796 12.192 98.5796 11.864 98.7156 11.488C98.8596 11.104 98.9316 10.684 98.9316 10.228C98.9316 9.788 98.8596 9.38 98.7156 9.004C98.5796 8.628 98.3836 8.3 98.1276 8.02C97.8716 7.74 97.5636 7.52 97.2036 7.36C96.8436 7.2 96.4436 7.12 96.0036 7.12C95.5636 7.12 95.1636 7.2 94.8036 7.36C94.4516 7.52 94.1476 7.74 93.8916 8.02C93.6356 8.3 93.4356 8.628 93.2916 9.004C93.1556 9.38 93.0876 9.788 93.0876 10.228ZM102.027 10.228C102.027 9.548 102.139 8.936 102.363 8.392C102.595 7.84 102.911 7.372 103.311 6.988C103.719 6.604 104.199 6.308 104.751 6.1C105.311 5.892 105.919 5.788 106.575 5.788C107.239 5.788 107.851 5.892 108.411 6.1C108.971 6.308 109.455 6.604 109.863 6.988C110.271 7.372 110.587 7.84 110.811 8.392C111.043 8.936 111.159 9.548 111.159 10.228C111.159 10.892 111.043 11.5 110.811 12.052C110.587 12.596 110.271 13.068 109.863 13.468C109.455 13.86 108.971 14.168 108.411 14.392C107.851 14.608 107.239 14.716 106.575 14.716C105.919 14.716 105.311 14.608 104.751 14.392C104.199 14.168 103.719 13.86 103.311 13.468C102.911 13.068 102.595 12.596 102.363 12.052C102.139 11.5 102.027 10.892 102.027 10.228ZM103.671 10.228C103.671 10.684 103.739 11.104 103.875 11.488C104.019 11.864 104.219 12.192 104.475 12.472C104.739 12.752 105.047 12.972 105.399 13.132C105.759 13.284 106.155 13.36 106.587 13.36C107.019 13.36 107.415 13.284 107.775 13.132C108.135 12.972 108.443 12.752 108.699 12.472C108.963 12.192 109.163 11.864 109.299 11.488C109.443 11.104 109.515 10.684 109.515 10.228C109.515 9.788 109.443 9.38 109.299 9.004C109.163 8.628 108.967 8.3 108.711 8.02C108.455 7.74 108.147 7.52 107.787 7.36C107.427 7.2 107.027 7.12 106.587 7.12C106.147 7.12 105.747 7.2 105.387 7.36C105.035 7.52 104.731 7.74 104.475 8.02C104.219 8.3 104.019 8.628 103.875 9.004C103.739 9.38 103.671 9.788 103.671 10.228ZM113.019 6.004H115.023L118.971 12.364H118.995V6.004H120.507V14.5H118.587L114.555 7.936H114.531V14.5H113.019V6.004Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M124 21H124.447C125.07 21 125.656 20.7103 126.035 20.2163L132.544 11.72C133.093 11.0023 133.093 10.0051 132.544 9.28744L126.031 0.786051C125.655 0.294901 125.072 0.00554085 124.454 0.00234413L124 0V21Z"
            fill="#FF72B6"
          />
        </g>
        <path d="M0 21H4V25H2C0.895431 25 0 24.1046 0 23V21Z" fill="#CE367F" />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M2 21C2 21 0 21 0 23C0 23 0 21 0 21L2 21Z"
          fill="#FF72B6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_469">
          <rect width="133.475" height="25" fill="white" />
        </clipPath>
        <clipPath id="clip1_1_469">
          <rect width="133.475" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#98BAFC" />
      <g clipPath="url(#clip0_1_182)">
        <path
          d="M21.7253 12.5297C21.173 12.5297 20.7253 12.9774 20.7253 13.5297V31H25.1374V28.056C25.1374 27.8351 25.3164 27.656 25.5374 27.656H26.1879C26.4088 27.656 26.5879 27.8351 26.5879 28.056V31H31V13.5297C31 12.9774 30.5523 12.5297 30 12.5297H21.7253ZM28.663 23.444C28.663 23.6649 28.4839 23.844 28.263 23.844H23.4622C23.2413 23.844 23.0622 23.6649 23.0622 23.444V22.7934C23.0622 22.5725 23.2413 22.3934 23.4622 22.3934H28.263C28.4839 22.3934 28.663 22.5725 28.663 22.7934V23.444ZM28.663 19.9143C28.663 20.1352 28.4839 20.3143 28.263 20.3143H23.4622C23.2413 20.3143 23.0622 20.1352 23.0622 19.9143V19.2638C23.0622 19.0428 23.2413 18.8638 23.4622 18.8638H28.263C28.4839 18.8638 28.663 19.0428 28.663 19.2638V19.9143ZM28.663 16.3846C28.663 16.6056 28.4839 16.7846 28.263 16.7846H23.4622C23.2413 16.7846 23.0622 16.6056 23.0622 16.3846V15.7341C23.0622 15.5132 23.2413 15.3341 23.4622 15.3341H28.263C28.4839 15.3341 28.663 15.5132 28.663 15.7341V16.3846Z"
          fill="white"
        />
        <path
          d="M9 31H13.4121V28.056C13.4121 27.8351 13.5912 27.656 13.8121 27.656H14.4626C14.6836 27.656 14.8626 27.8351 14.8626 28.056V31H19.2747V10C19.2747 9.44772 18.827 9 18.2747 9H10C9.44772 9 9 9.44772 9 10V31ZM11.337 12.2044C11.337 11.9835 11.5161 11.8044 11.737 11.8044H16.5377C16.7587 11.8044 16.9377 11.9835 16.9377 12.2044V12.8549C16.9377 13.0759 16.7587 13.2549 16.5377 13.2549H11.737C11.5161 13.2549 11.337 13.0759 11.337 12.8549V12.2044ZM11.337 15.7341C11.337 15.5132 11.5161 15.3341 11.737 15.3341H16.5377C16.7587 15.3341 16.9377 15.5132 16.9377 15.7341V16.3846C16.9377 16.6055 16.7587 16.7846 16.5377 16.7846H11.737C11.5161 16.7846 11.337 16.6055 11.337 16.3846V15.7341ZM11.337 19.2637C11.337 19.0428 11.5161 18.8637 11.737 18.8637H16.5377C16.7587 18.8637 16.9377 19.0428 16.9377 19.2637V19.9143C16.9377 20.1352 16.7587 20.3143 16.5377 20.3143H11.737C11.5161 20.3143 11.337 20.1352 11.337 19.9143V19.2637ZM11.337 22.7934C11.337 22.5725 11.5161 22.3934 11.737 22.3934H16.5377C16.7587 22.3934 16.9377 22.5725 16.9377 22.7934V23.444C16.9377 23.6649 16.7587 23.844 16.5377 23.844H11.737C11.5161 23.844 11.337 23.6649 11.337 23.444V22.7934Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_182">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}