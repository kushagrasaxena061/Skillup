import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

const Condition = () => {
    return (
        <div
            className="bg-gradient-to-l  from-[#FAF3F0] via-[#C4DFDF] to-[#DBC4F0]">
            <div>
                Terms And conditions
            </div>
            <div className="h-full flex items-start justify-start space-x-3">
                <Link href="/">
                    <Button>
                        Disagree
                    </Button>
                </Link>
                <Link href="/teacher/create">
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2 " />
                        New course
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default Condition;
