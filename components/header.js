import Link from "next/link";

export default function Header({ headerContent, mode=""}) {
  return (
    <ul>
      {headerContent?.Navs && headerContent?.Navs.length
        ? headerContent?.Navs.map((nav) => (
            <li style={{ "display": "inline", "padding" : "10px" }} key={nav._uid}>
              <Link href={`${nav.slug}${mode && nav.NavLabel ==="Blogs" ? `-${mode}` : ``}`} style={{ "color": "blue" }}>{nav.NavLabel}</Link>
            </li>
          ))
        : null}
    </ul>
  );
}
