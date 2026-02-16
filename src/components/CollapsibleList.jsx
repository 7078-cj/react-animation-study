import React, { useState } from 'react'
import { motion } from 'motion/react'

export default function CollapsibleList() {
    const [expanded ,setExpanded] = useState(null)
    const items = [1, 2, 3]
  return (
    <div>
        {
            items.map((id)=>(
                <motion.div
                    key={id}
                    layout
                    onClick={()=> setExpanded((prev)=> (prev === id ? null : id))}
                >
                    <h3>Item {id}</h3>
                    {
                        expanded === id && (
                            <motion.p>
                                This section Expands
                            </motion.p>
                        )
                    }

                </motion.div>
            ))
        }
    </div>
  )
}
