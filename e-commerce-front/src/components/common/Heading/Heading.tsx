export default function Heading({ children }: { children: React.ReactNode }) {
    return <h2 className="mb-3 text-capitalize" style={{ fontSize: "26px" }}>{children}</h2>;
}