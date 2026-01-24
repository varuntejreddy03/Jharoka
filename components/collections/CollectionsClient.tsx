"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CollectionImage {
  src: string;
  name: string;
}

interface Collection {
  name: string;
  folder: string;
  images: CollectionImage[];
}

interface CollectionsClientProps {
  collections: Collection[];
}

export default function CollectionsClient({ collections }: CollectionsClientProps) {
  return (
    <div className="space-y-20 sm:space-y-28">
      {collections.map((collection, collectionIndex) => (
        <motion.section
          key={collection.folder}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: collectionIndex * 0.1 }}
        >
          <div className="flex items-center gap-6 mb-8 sm:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-jharoka-burgundy-900">
              {collection.name}
            </h2>
            <div className="flex-1 h-[1px] bg-jharoka-burgundy/20" />
            <span className="text-sm text-jharoka-text-secondary">
              {collection.images.length} {collection.images.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {collection.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {collection.images.map((image, imageIndex) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: imageIndex * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={image.src}
                      alt={image.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm sm:text-base text-jharoka-burgundy-900/80 font-medium">
                    {image.name}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-jharoka-text-secondary">
              No items in this collection yet.
            </div>
          )}
        </motion.section>
      ))}
    </div>
  );
}
