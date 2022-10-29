import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createPreviewSubscriptionHook } from "next-sanity";
import { sanityConfig } from "./sanity.config";

const typedConfig = {
  dataset: sanityConfig.dataset as string,
  projectId: sanityConfig.projectId as string,
};

export const imageBuilder = createImageUrlBuilder(typedConfig);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(typedConfig);
