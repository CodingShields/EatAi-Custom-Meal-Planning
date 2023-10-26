import React, { useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore"
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore"

const EasOrderSummary = () => {
    const variables = useEasyOrderStore(state => state)
    const { reset } = useEasyOrderStoreActions()


console.log(variables);

}

export default EasOrderSummary