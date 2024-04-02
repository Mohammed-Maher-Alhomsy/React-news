import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  list: { name: string; value: string }[];
  type: "source" | "category";
};

const FilterBy = ({ list, type }: Props) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const chnageHandler = (e: string) => {
    params.set(type, e);
    navigate({ search: params.toString() });
  };

  return (
    <Select onValueChange={chnageHandler}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select a ${type}`} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel className="capitalize">{type}</SelectLabel>
          {list.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterBy;
