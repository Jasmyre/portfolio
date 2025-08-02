export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Stats</h2>
                    <p className="text-muted-foreground">Accomplishments</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+1200</div>
                        <p>Stars on GitHub</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">56%</div>
                        <p>Conversion rate</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+500</div>
                        <p>Powered Apps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
