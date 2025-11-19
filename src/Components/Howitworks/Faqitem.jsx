
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
const Faqitem = ({question, answer}) => {
    const [open, setOpen] = useState(false);
  return (
   <>
   <div className="border-b border-gray-700 py-4 w-200 flex flex-col justify-center items-center m-auto">
<button
onClick={() => setOpen(!open)}
className="w-full flex justify-between items-center primary text-left text-white text-lg font-medium"
>
{question}
<ChevronDown
className={`w-5 h-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
/>
</button>


<AnimatePresence>
{open && (
<motion.p
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3 }}
className="tertiary mt-3 text-sm leading-relaxed"
>
{answer}
</motion.p>
)}
</AnimatePresence>
</div>
   </>
  )
}

export default Faqitem