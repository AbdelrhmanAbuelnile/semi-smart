import AreaChar from "./AreaChar";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

function TotalChart({ data, text }) {
  return (
    <div className="w-full bg-secondary rounded-[10px] py-3 pl-3 text-center flex flex-col justify-center items-start gap-4 h-[300px] lg:h-[435px]">
				<h2 className="text-xl font-bold text-ChartGray capitalize">{text}</h2>
				<div className="w-full h-full">
					<AreaChar
						data={data}
						className="w-full"
					/>
				</div>
			</div>
  )
}

export default TotalChart