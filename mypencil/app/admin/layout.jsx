import SideBar from "@/components/admin/SideBar";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <SideBar />
            </div>
            {children}
        </>
    )
}