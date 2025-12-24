import svgPaths from "./svg-r0kcvic17d";

function Link({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[16px]">{children}</div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full" data-name="Container">
      <Link>
        <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="LinkedInIcon">
            <div className="absolute contents inset-[8.34%_8.34%_12.5%_8.34%]" data-name="Group">
              <div className="absolute inset-[33.34%_8.34%_12.5%_41.66%]" data-name="Vector">
                <div className="absolute inset-[-6.92%_-7.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                    <path d={svgPaths.p27109380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[8.34%] right-3/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-7.5%_-22.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
                    <path d={svgPaths.p7a67070} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[8.34%] right-3/4 top-[8.34%]" data-name="Vector">
                <div className="absolute inset-[-22.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                    <path d={svgPaths.p1ed4b200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link>
        <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="XIcon">
            <div className="absolute contents inset-[13.33%_12.11%_13.34%_12.93%]" data-name="Group">
              <div className="absolute inset-[13.33%_12.11%_13.34%_12.93%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p1f895700} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link>
        <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="FacebookIcon">
            <div className="absolute bottom-[8.33%] contents left-[29.16%] right-1/4 top-[8.34%]" data-name="Group">
              <div className="absolute bottom-[8.33%] left-[29.16%] right-1/4 top-[8.34%]" data-name="Vector">
                <div className="absolute inset-[-5%_-9.09%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                    <path d={svgPaths.p380b2970} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Link">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[16px] items-start relative w-full">
          <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="YouTubeIcon">
              <div className="absolute contents inset-[20.56%_8.24%_20.56%_8.23%]" data-name="Group">
                <div className="absolute inset-[20.56%_8.24%_20.56%_8.23%]" data-name="Vector">
                  <div className="absolute inset-[-7.08%_-4.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
                      <path d={svgPaths.p195c1400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[37.5%_37.5%_37.5%_41.66%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-20%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
                      <path d={svgPaths.p2dfc1e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}