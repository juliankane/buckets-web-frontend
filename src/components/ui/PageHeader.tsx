type PageHeaderProps = {
    children: React.ReactNode
}



export function PageHeader({
    children,

}:PageHeaderProps ) {
    return (

        <h1>
            {children}
        </h1>

    )


}