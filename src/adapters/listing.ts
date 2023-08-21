import IPropertyListing from "@/interfaces/IPropertyListing";

export function adapter(listing: any): IPropertyListing {
  return {
    pics: listing.pic,
    title: listing.title,
    address: listing.address,
    projectType: listing.project_type,
    year: listing.year,
    ownershipType: listing.ownership_type,
    psfMin: listing.psf_min,
    psfMax: listing.psf_max,
    subpriceLabel: listing.subprice_label,
    availabilitiesLabel: listing.availabilities_label,
    description: listing.description,
  };
}