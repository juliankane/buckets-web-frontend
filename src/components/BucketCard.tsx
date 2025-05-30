import { FC } from "react"

type BucketCardType = {
    name: string,
    description?: string,
}


export const BucketCard: FC<BucketCardType> = ({name, description}) => {
    return (
      <div className="bg-white rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-4 w-full aspect-[3/2] space-y-10">
            <div className="hover:cursor-pointer hover:bg-black-warm rounded-md space-y-5">
                <span className="flex flex-row px-3 text-4xl">
                    {name}
                </span>
                <span className="flex flex-row px-3">
                    {description}
                </span>
            </div>
        </div>
    )


}