/* eslint-disable @typescript-eslint/no-unused-vars */
import { BucketCard } from "@components/BucketCard";
import { useState } from "react";

export function Buckets(){
  const [searchTerm, setSearchTerm] = useState<string>("");
  
    // testing buckets
    const buckets = [
        { name: "Bucket Placeholder 1", description: "example of a 'Bucket Card' with a title+description" },
        { name: "Bucket Placeholder 2", 
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. \
                        Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem \
                        placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. \
                        Urna tempor pulvinar vivamus fringilla lacus nec metus." },
        { name: "Bucket Placeholder 3", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. \
                                                      Sit amet consectetur adipiscing elit quisque faucibus ex. \
                                                      Adipiscing elit quisque faucibus ex sapien vitae pellentesque." },
    ];


   // Filter buckets based on searchTerm
  const filteredBuckets = buckets.filter(bucket =>
    !searchTerm ||
    bucket.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10">
      {/* Subgrid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBuckets.map(bucket => (
          <BucketCard
            key={bucket.name}
            name={bucket.name}
            description={bucket.description}
          />
        ))}
      </div>
    </div>
  );
}