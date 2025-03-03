import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  name: string
  level: number
}

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{name}</h3>
            <span className="text-sm text-muted-foreground">{level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

