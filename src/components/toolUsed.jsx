import proptype from "prop-types";

ToolUsed.propTypes = {
    children: proptype.object,
};
export default function ToolUsed({ children }) {
    return (
        <>
            <span className="inline-block px-1 py-0.5 rounded-full border-2 font-karla border-sky-400 text-blue-500">
                {children}
            </span>
        </>
    );
}
