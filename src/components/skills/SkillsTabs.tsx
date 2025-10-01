"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Flex, Text, Tag, ToggleButton, Line, Icon } from "@once-ui-system/core";
import { skillsData } from "@/resources";

export function SkillsTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const [openFrameworks, setOpenFrameworks] = useState(true);
  const [openMethodologies, setOpenMethodologies] = useState(false);
  const [openSoftwareIdx, setOpenSoftwareIdx] = useState<number | null>(0);
  const [openOsIdx, setOpenOsIdx] = useState<number | null>(0);
  const [openFsIdx, setOpenFsIdx] = useState<number | null>(0);

  // Ensure the first category is open when a tab is first viewed
  useEffect(() => {
    if (tabIndex === 0) {
      setOpenFrameworks(true);
      setOpenMethodologies(false);
    } else if (tabIndex === 1) {
      setOpenSoftwareIdx(0);
    } else if (tabIndex === 2) {
      setOpenOsIdx(0);
    } else if (tabIndex === 3) {
      setOpenFsIdx(0);
    }
  }, [tabIndex]);

  const Collapsible = ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [measuredHeight, setMeasuredHeight] = useState(0);

    useEffect(() => {
      const el = contentRef.current;
      if (!el) return;
      const measure = () => setMeasuredHeight(el.scrollHeight);
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }, [children]);

    return (
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? measuredHeight : 0,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 300ms ease, opacity 250ms ease",
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    );
  };

  const CategoryRow = ({ title, open, onClick }: { title: string; open: boolean; onClick: () => void }) => {
    const [hover, setHover] = useState(false);
    return (
      <Flex
        horizontal="space-between"
        vertical="center"
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ cursor: "pointer", background: hover ? "#333333" : "transparent", borderRadius: "8px", padding: "8px 12px" }}
      >
        <Text variant="heading-strong-l" style={{ color: "#59aed6" }}>{title}</Text>
        <Icon name={open ? "chevronDown" : "chevronRight"} />
      </Flex>
    );
  };

  const Bullet = ({ active }: { active: boolean }) => (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        border: "2px solid currentColor",
        marginRight: 8,
        backgroundColor: active ? "currentColor" : "transparent",
      }}
    />
  );

  const categories = [
    { title: "Frameworks Methodologies" },
    { title: "Software & Hardware" },
    { title: "Operating Systems" },
    { title: "Other" },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleJump = (targetTab: number, idx?: number) => {
    if (targetTab !== tabIndex) {
      setTabIndex(targetTab);
      // Delay until tab content is rendered, then open and scroll
      setTimeout(() => {
        if (targetTab === 0) {
          const i = typeof idx === "number" ? idx : 0;
          setOpenFrameworks(i === 0);
          setOpenMethodologies(i === 1);
          scrollToId(i === 0 ? "cat-frameworks" : "cat-methodologies");
        } else if (targetTab === 1) {
          const i = typeof idx === "number" ? idx : 0;
          setOpenSoftwareIdx(i);
          scrollToId(`cat-software-${i}`);
        } else if (targetTab === 2) {
          const i = typeof idx === "number" ? idx : 0;
          setOpenOsIdx(i);
          scrollToId(`cat-os-${i}`);
        } else if (targetTab === 3) {
          const i = typeof idx === "number" ? idx : 0;
          setOpenFsIdx(i);
          scrollToId(`cat-fs-${i}`);
        }
      }, 0);
      return;
    }

    // Same tab
    if (targetTab === 0) {
      const i = typeof idx === "number" ? idx : 0;
      setOpenFrameworks(i === 0);
      setOpenMethodologies(i === 1);
      scrollToId(i === 0 ? "cat-frameworks" : "cat-methodologies");
    } else if (targetTab === 1 && typeof idx === "number") {
      setOpenSoftwareIdx(idx);
      scrollToId(`cat-software-${idx}`);
    } else if (targetTab === 2 && typeof idx === "number") {
      setOpenOsIdx(idx);
      scrollToId(`cat-os-${idx}`);
    } else if (targetTab === 3 && typeof idx === "number") {
      setOpenFsIdx(idx);
      scrollToId(`cat-fs-${idx}`);
    }
  };

  // Split methodologies list into two categories: Frameworks and Methodologies
  const frameworkKeywords = new Set([
    "ISO 27001",
    "NIST SP 800-53",
    "PCI/DSS",
    "SOC1/SOC2",
    "Attack Frameworks",
  ]);
  const frameworksList = skillsData.methodologies.filter((m: string) => frameworkKeywords.has(m));
  const methodologiesList = skillsData.methodologies.filter((m: string) => !frameworkKeywords.has(m));

  return (
    <Column gap="l" style={{ maxWidth: 720, width: "100%", margin: "0 auto" }}>
      <Flex gap="4" horizontal="center">
        {categories.map(({ title }, i) => (
          <ToggleButton key={title} label={title} size="l" selected={tabIndex === i} onClick={() => setTabIndex(i)} />
        ))}
      </Flex>
      <Line background="neutral-alpha-medium" />
      {/* Quick links for categories within the active tab */}
      {tabIndex === 0 && (
        <Flex wrap gap="12" paddingTop="8" horizontal="center">
          <Flex vertical="center" gap="4" onClick={() => handleJump(0, 0)} style={{ cursor: "pointer" }}>
            <Bullet active={openFrameworks} />
            <Text variant="label-strong-l">Frameworks</Text>
          </Flex>
          <Text variant="label-default-l">|</Text>
          <Flex vertical="center" gap="4" onClick={() => handleJump(0, 1)} style={{ cursor: "pointer" }}>
            <Bullet active={openMethodologies} />
            <Text variant="label-strong-l">Methodologies</Text>
          </Flex>
        </Flex>
      )}
      {tabIndex === 1 && (
        <Flex wrap gap="12" paddingTop="8" horizontal="center">
          {skillsData.softwareAndHardware.map((g: any, i: number) => (
            <>
              <Flex key={`jump-software-${i}`} vertical="center" gap="4" onClick={() => handleJump(1, i)} style={{ cursor: "pointer" }}>
                <Bullet active={openSoftwareIdx === i} />
                <Text variant="label-strong-l">{g.title}</Text>
              </Flex>
              {i !== skillsData.softwareAndHardware.length - 1 && (
                <Text variant="label-default-l">|</Text>
              )}
            </>
          ))}
        </Flex>
      )}
      {tabIndex === 2 && (
        <Flex wrap gap="12" paddingTop="8" horizontal="center">
          {skillsData.operatingSystems.map((g: any, i: number) => (
            <>
              <Flex key={`jump-os-${i}`} vertical="center" gap="4" onClick={() => handleJump(2, i)} style={{ cursor: "pointer" }}>
                <Bullet active={openOsIdx === i} />
                <Text variant="label-strong-l">{g.title}</Text>
              </Flex>
              {i !== skillsData.operatingSystems.length - 1 && (
                <Text variant="label-default-l">|</Text>
              )}
            </>
          ))}
        </Flex>
      )}
      {tabIndex === 3 && (
        <Flex wrap gap="12" paddingTop="8" horizontal="center">
          {skillsData.fileSystems.map((g: any, i: number) => (
            <>
              <Flex key={`jump-fs-${i}`} vertical="center" gap="4" onClick={() => handleJump(3, i)} style={{ cursor: "pointer" }}>
                <Bullet active={openFsIdx === i} />
                <Text variant="label-strong-l">{g.title}</Text>
              </Flex>
              {i !== skillsData.fileSystems.length - 1 && (
                <Text variant="label-default-l">|</Text>
              )}
            </>
          ))}
        </Flex>
      )}
      {tabIndex === 0 && (
        <Column gap="8" paddingTop="m">
          <Column id="cat-frameworks" gap="8">
            <CategoryRow title="Frameworks" open={openFrameworks} onClick={() => { setOpenFrameworks((v) => !v); if (!openFrameworks) setOpenMethodologies(false); }} />
            <Collapsible isOpen={openFrameworks}>
              <Column style={{ paddingLeft: 20 }} gap="8">
                <Flex fillWidth wrap gap="8">
                  {frameworksList.map((m: string) => (
                    <Tag key={m} size="l">{m}</Tag>
                  ))}
                </Flex>
              </Column>
            </Collapsible>
          </Column>
          <Column id="cat-methodologies" gap="8">
            <CategoryRow title="Methodologies" open={openMethodologies} onClick={() => { setOpenMethodologies((v) => !v); if (!openMethodologies) setOpenFrameworks(false); }} />
            <Collapsible isOpen={openMethodologies}>
              <Column style={{ paddingLeft: 20 }} gap="8">
                <Flex fillWidth wrap gap="8">
                  {methodologiesList.map((m: string) => (
                    <Tag key={m} size="l">{m}</Tag>
                  ))}
                </Flex>
              </Column>
            </Collapsible>
          </Column>
        </Column>
      )}
      {tabIndex === 1 && (
        <Column gap="l" paddingTop="m">
          {skillsData.softwareAndHardware.map((group: any, idx: number) => (
            <Column key={`${group.title}-${idx}`} gap="8" id={`cat-software-${idx}`}>
              <CategoryRow title={group.title} open={openSoftwareIdx === idx} onClick={() => setOpenSoftwareIdx((v) => (v === idx ? null : idx))} />
              <Collapsible isOpen={openSoftwareIdx === idx}>
              <Column gap="8" style={{ paddingLeft: 20 }}>
                {group.skills.map((entry: any, eidx: number) => (
                  typeof entry === "string"
                    ? (
                      <Flex key={`${entry}-${eidx}`} wrap gap="8">
                        <Tag size="l">{entry}</Tag>
                      </Flex>
                    )
                    : (
                      <Column key={`${entry.name}-${eidx}`} gap="8">
                        <Text variant="body-strong-l">{entry.name}</Text>
                        {entry.items && (
                          <Flex wrap gap="8">
                            {entry.items.map((it: string) => (
                              <Tag key={it} size="l">{it}</Tag>
                            ))}
                          </Flex>
                        )}
                      </Column>
                    )
                ))}
              </Column>
              </Collapsible>
            </Column>
          ))}
        </Column>
      )}
      {tabIndex === 2 && (
        <Column gap="l" paddingTop="m">
          {skillsData.operatingSystems.map((group: any, idx: number) => (
            <Column key={group.title} gap="8" id={`cat-os-${idx}`}>
              <CategoryRow title={group.title} open={openOsIdx === idx} onClick={() => setOpenOsIdx((v) => (v === idx ? null : idx))} />
              <Collapsible isOpen={openOsIdx === idx}>
                <Column style={{ paddingLeft: 20 }}>
                  <Flex wrap gap="8">
                    {group.skills.map((it: string) => (
                      <Tag key={it} size="l">{it}</Tag>
                    ))}
                  </Flex>
                </Column>
              </Collapsible>
            </Column>
          ))}
        </Column>
      )}
      {tabIndex === 3 && (
        <Column gap="l" paddingTop="m">
          {skillsData.fileSystems.map((group: any, idx: number) => (
            <Column key={group.title} gap="8" id={`cat-fs-${idx}`}>
              <CategoryRow title={group.title} open={openFsIdx === idx} onClick={() => setOpenFsIdx((v) => (v === idx ? null : idx))} />
              <Collapsible isOpen={openFsIdx === idx}>
                <Column style={{ paddingLeft: 20 }}>
                  <Flex wrap gap="8">
                    {group.skills.map((it: string) => (
                      <Tag key={it} size="l">{it}</Tag>
                    ))}
                  </Flex>
                </Column>
              </Collapsible>
            </Column>
          ))}
        </Column>
      )}
    </Column>
  );
}


