import { IconName } from "./ReelStack.model";

function ReelStack(stack:IconName[]) {
    return (
        <div className="ReelStack">
            <p>Stack:</p>
            <div className="ReelStack__group">

            {stack.map((tecnology, index) => (
                <div key={`${"stack"}${index}`} className="ReelStack__group__element">
                    {tecnology.icon}
                </div>
            ))}
            </div>
        </div>
    )
}

export default ReelStack;