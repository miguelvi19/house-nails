import React from "react";
import { createRoot } from "react-dom/client";
import {
  Bell,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronRight,
  Clock,
  ClipboardList,
  CreditCard,
  Home,
  MessageCircle,
  Package,
  Plus,
  Search,
  Sparkles,
  Trash2,
  Users,
  UserCog,
  Wallet,
  X,
} from "lucide-react";
import "./styles.css";

const colors = {
  rose: "#e8527a",
  roseSoft: "#fdf0f4",
  roseLine: "#f4c5d3",
  ink: "#1c1917",
  muted: "#78716c",
  surface: "#ffffff",
  canvas: "#f6f3f1",
  border: "#e8e2dc",
  green: "#2d7d4f",
  greenSoft: "#ebf5ef",
  blue: "#1d5fa5",
  blueSoft: "#eff6ff",
  amber: "#b45309",
  amberSoft: "#fef3c7",
  red: "#b03030",
  redSoft: "#fef0f0",
};

const staff = [
  { id: 1, name: "Valentina", color: "#e8527a", initials: "VA", available: true },
  { id: 2, name: "Daniela", color: "#9b6fd4", initials: "DA", available: true },
  { id: 3, name: "Camila", color: "#2d9b7a", initials: "CA", available: false },
  { id: 4, name: "Sofia", color: "#d4913a", initials: "SO", available: true },
];

const admins = [
  { id: 1, name: "Miguel", initials: "MI", role: "Administrador general", permissions: ["Inventario", "Pagos", "Costos"] },
  { id: 2, name: "Carolina", initials: "CA", role: "Administradora de caja", permissions: ["Pagos", "Costos"] },
  { id: 3, name: "Natalia", initials: "NA", role: "Administradora de inventario", permissions: ["Inventario"] },
];

const initialAttendance = [
  { staffId: 1, checkIn: "08:45", checkOut: "", status: "Trabajando" },
  { staffId: 2, checkIn: "09:05", checkOut: "", status: "Trabajando" },
  { staffId: 3, checkIn: "", checkOut: "", status: "No ha llegado" },
  { staffId: 4, checkIn: "08:55", checkOut: "17:30", status: "Salida registrada" },
];

const initialStaffPayments = [
  { id: 1, staffId: 1, concept: "Comision servicios semana", amount: 180000, status: "Pendiente" },
  { id: 2, staffId: 2, concept: "Bono puntualidad", amount: 45000, status: "Pagado" },
  { id: 3, staffId: 4, concept: "Comision pedicure spa", amount: 65000, status: "Pendiente" },
];

const initialLocalCosts = [
  { id: 1, concept: "Arriendo local", amount: 1600000, category: "Fijo", status: "Pendiente" },
  { id: 2, concept: "Servicios publicos", amount: 380000, category: "Fijo", status: "Pagado" },
  { id: 3, concept: "Compra insumos limpieza", amount: 125000, category: "Variable", status: "Pagado" },
];

const services = [
  { id: 1, name: "Manicure gel completo", duration: 60, price: 45000 },
  { id: 2, name: "Semipermanente + diseno", duration: 90, price: 65000 },
  { id: 3, name: "Pedicure spa", duration: 75, price: 55000 },
  { id: 4, name: "Manicure express", duration: 30, price: 28000 },
  { id: 5, name: "Unas acrilicas + diseno", duration: 120, price: 85000 },
  { id: 6, name: "Gel con nail art", duration: 90, price: 70000 },
  { id: 7, name: "Remocion + manicure", duration: 75, price: 50000 },
  { id: 8, name: "Pedicure semipermanente", duration: 60, price: 60000 },
];

const initialAppointments = [
  { id: 1, staffId: 1, day: 4, time: "09:00", client: "Maria Gonzalez", serviceId: 1, status: "done" },
  { id: 2, staffId: 2, day: 4, time: "09:30", client: "Laura Ospina", serviceId: 2, status: "done" },
  { id: 3, staffId: 4, day: 4, time: "10:30", client: "Natalia Rios", serviceId: 3, status: "active" },
  { id: 4, staffId: 3, day: 4, time: "11:00", client: "Juliana Mora", serviceId: 4, status: "active" },
  { id: 5, staffId: 1, day: 4, time: "12:00", client: "Andrea Castro", serviceId: 5, status: "pending" },
  { id: 6, staffId: 2, day: 4, time: "13:30", client: "Paula Vargas", serviceId: 6, status: "pending" },
  { id: 7, staffId: 3, day: 4, time: "14:00", client: "Isabela Duque", serviceId: 1, status: "pending" },
  { id: 8, staffId: 4, day: 4, time: "15:30", client: "Carolina Perez", serviceId: 7, status: "pending" },
  { id: 9, staffId: 4, day: 5, time: "10:00", client: "Isabella Reyes", serviceId: 8, status: "pending" },
  { id: 10, staffId: 1, day: 5, time: "12:00", client: "Alejandra Villa", serviceId: 2, status: "pending" },
  { id: 11, staffId: 3, day: 3, time: "10:00", client: "Diana Herrera", serviceId: 6, status: "done" },
  { id: 12, staffId: 4, day: 2, time: "11:30", client: "Mariana Soto", serviceId: 1, status: "done" },
];

const clients = [
  { id: 1, name: "Maria Gonzalez", phone: "312 456 7890", email: "maria@gmail.com", visits: 14, lastVisit: "06/06/2026", spend: 624000, favorite: "Manicure gel", notes: "Alergica a acetona. Prefiere colores nude.", active: true, initials: "MG", color: "#e8527a" },
  { id: 2, name: "Laura Ospina", phone: "300 123 4567", email: "lauraospina@hotmail.com", visits: 9, lastVisit: "03/06/2026", spend: 412000, favorite: "Semipermanente", notes: "Le gusta nail art geometrico.", active: true, initials: "LO", color: "#9b6fd4" },
  { id: 3, name: "Natalia Rios", phone: "315 789 0123", email: "", visits: 6, lastVisit: "02/06/2026", spend: 289000, favorite: "Pedicure spa", notes: "Viene siempre con su mama.", active: true, initials: "NR", color: "#2d9b7a" },
  { id: 4, name: "Juliana Mora", phone: "321 654 3210", email: "jmora@yahoo.com", visits: 21, lastVisit: "01/06/2026", spend: 983000, favorite: "Acrilicas", notes: "Cliente VIP. Paga siempre en efectivo.", active: true, initials: "JM", color: "#d4913a" },
  { id: 5, name: "Andrea Castro", phone: "310 987 6543", email: "andrea.c@gmail.com", visits: 3, lastVisit: "28/05/2026", spend: 145000, favorite: "Manicure express", notes: "Nueva clienta. Llego por referido de Juliana.", active: true, initials: "AC", color: "#3a7fd4" },
  { id: 6, name: "Paula Vargas", phone: "318 234 5678", email: "", visits: 11, lastVisit: "25/05/2026", spend: 567000, favorite: "Gel nail art", notes: "Disenos complejos. Reservar minimo 2h.", active: true, initials: "PV", color: "#d44f8a" },
  { id: 7, name: "Manuela Torres", phone: "316 678 9012", email: "manu.t@gmail.com", visits: 25, lastVisit: "05/05/2026", spend: 1240000, favorite: "Semipermanente", notes: "Cliente mas frecuente. Descuento del 10%.", active: true, initials: "MT", color: "#7d2d9b" },
];

const initialInventory = [
  { id: 1, name: "Esmalte gel Rosa Quartz", category: "Esmaltes", stock: 12, min: 5, unit: "und", price: 18000, supplier: "OPI Colombia" },
  { id: 2, name: "Base coat Essie", category: "Esmaltes", stock: 2, min: 5, unit: "und", price: 45000, supplier: "Essie CO" },
  { id: 3, name: "Top coat gel UV", category: "Esmaltes", stock: 3, min: 4, unit: "und", price: 38000, supplier: "OPI Colombia" },
  { id: 4, name: "Acrilico polvo rosa nude", category: "Acrilicos", stock: 4, min: 6, unit: "oz", price: 65000, supplier: "Young Nails CO" },
  { id: 5, name: "Lampara UV LED 48W", category: "Herramientas", stock: 5, min: 2, unit: "und", price: 180000, supplier: "Nail Equipment" },
  { id: 6, name: "Lima 180/240 x50", category: "Insumos", stock: 8, min: 10, unit: "paq", price: 22000, supplier: "Dist. Belleza" },
  { id: 7, name: "Acetona pura 500ml", category: "Limpieza", stock: 6, min: 3, unit: "frasco", price: 25000, supplier: "Quimica CO" },
];

const initialTemplates = [
  { id: 1, name: "Recordatorio 24h", channel: "whatsapp", active: true, timing: "24h antes", message: "Hola {nombre}. Te recordamos tu cita manana a las {hora} en House Nails." },
  { id: 2, name: "Recordatorio 2h", channel: "whatsapp", active: true, timing: "2h antes", message: "Hola {nombre}. Tu cita es en 2 horas con {manicurista}. Te esperamos." },
  { id: 3, name: "Confirmacion de cita", channel: "whatsapp", active: true, timing: "Al confirmar", message: "Cita confirmada: {fecha} a las {hora}, servicio {servicio}, valor {precio}." },
  { id: 4, name: "Seguimiento post-cita", channel: "email", active: false, timing: "24h despues", message: "Hola {nombre}. Queremos saber como quedaron tus unas. Gracias por visitarnos." },
];

const status = {
  done: { label: "Completada", bg: colors.greenSoft, color: colors.green },
  active: { label: "En curso", bg: colors.blueSoft, color: colors.blue },
  pending: { label: "Pendiente", bg: colors.canvas, color: colors.muted },
  canceled: { label: "Cancelada", bg: colors.redSoft, color: colors.red },
};

const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const weekDates = ["08/06", "09/06", "10/06", "11/06", "12/06", "13/06", "14/06"];
const hours = Array.from({ length: 11 }, (_, index) => `${String(index + 8).padStart(2, "0")}:00`);

const money = (value) => `$${value.toLocaleString("es-CO")}`;
const moneyShort = (value) => `$${Math.round(value / 1000)}k`;
const serviceById = (id) => services.find((service) => service.id === id);
const staffById = (id) => staff.find((member) => member.id === id);
const appointmentValue = (appointment) => serviceById(appointment.serviceId)?.price || 0;

function App() {
  const [view, setView] = React.useState("dashboard");
  const [appointments, setAppointments] = React.useState(initialAppointments);
  const [inventory, setInventory] = React.useState(initialInventory);
  const [templates, setTemplates] = React.useState(initialTemplates);
  const [attendance, setAttendance] = React.useState(initialAttendance);
  const [staffPayments, setStaffPayments] = React.useState(initialStaffPayments);
  const [localCosts, setLocalCosts] = React.useState(initialLocalCosts);
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [selectedAppointment, setSelectedAppointment] = React.useState(null);
  const [quickAction, setQuickAction] = React.useState(null);

  const context = {
    appointments,
    setAppointments,
    inventory,
    setInventory,
    templates,
    setTemplates,
    attendance,
    setAttendance,
    staffPayments,
    setStaffPayments,
    localCosts,
    setLocalCosts,
    selectedClient,
    setSelectedClient,
    selectedAppointment,
    setSelectedAppointment,
    setQuickAction,
  };

  const current = navItems.find((item) => item.id === view);
  const View = views[view] || DashboardView;

  return (
    <div className="app-shell">
      <Sidebar view={view} onChange={setView} />
      <main className="workspace">
        <TopBar current={current} onAction={() => setQuickAction("appointment")} />
        <View {...context} />
      </main>
      {selectedClient && <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />}
      {selectedAppointment && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onUpdate={(id, nextStatus) => {
            setAppointments((items) => items.map((item) => (item.id === id ? { ...item, status: nextStatus } : item)));
            setSelectedAppointment((item) => ({ ...item, status: nextStatus }));
          }}
        />
      )}
      {quickAction === "appointment" && (
        <QuickAppointmentModal
          onClose={() => setQuickAction(null)}
          onSave={(data) => setAppointments((items) => [...items, { id: Date.now(), day: 1, status: "pending", ...data }])}
        />
      )}
    </div>
  );
}

const navItems = [
  { id: "dashboard", label: "Inicio", icon: Home },
  { id: "agenda", label: "Agenda", icon: CalendarDays },
  { id: "clientes", label: "Clientes", icon: Users },
  { id: "usuarios", label: "Usuarios", icon: UserCog },
  { id: "pagos", label: "Pagos", icon: Wallet },
  { id: "inventario", label: "Inventario", icon: Package },
  { id: "recordatorios", label: "Recordatorios", icon: Bell },
];

const views = {
  dashboard: DashboardView,
  agenda: AgendaView,
  clientes: ClientsView,
  usuarios: UsersView,
  pagos: PaymentsView,
  inventario: InventoryView,
  recordatorios: RemindersView,
};

function Sidebar({ view, onChange }) {
  return (
    <aside className="sidebar">
      <div className="brand-mark"><Sparkles size={20} /></div>
      <div className="brand-name">House Nails</div>
      <nav className="nav-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button className={`nav-button ${view === item.id ? "is-active" : ""}`} key={item.id} onClick={() => onChange(item.id)} title={item.label}>
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <Avatar initials="HN" color={colors.rose} />
        <span>Admin</span>
      </div>
    </aside>
  );
}

function TopBar({ current, onAction }) {
  const date = new Date().toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" });
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">House Nails</p>
        <h1>{current?.label || "Inicio"}</h1>
        <span className="subtle text-capitalize">{date}</span>
      </div>
      <button className="primary-button" onClick={onAction}><Plus size={16} /> Nueva cita</button>
    </header>
  );
}

function DashboardView({ appointments, inventory, setSelectedAppointment }) {
  const today = appointments.filter((item) => item.day === 4);
  const done = today.filter((item) => item.status === "done");
  const pending = today.filter((item) => item.status === "pending");
  const active = today.filter((item) => item.status === "active");
  const total = done.reduce((sum, item) => sum + appointmentValue(item), 0);
  const alerts = inventory.filter((item) => item.stock / item.min < 1.5);
  const weeklySales = [385000, 521000, 448000, 612000, 780000, 920000, 493000];
  const topServices = services.slice(0, 5).map((service, index) => ({ ...service, count: [34, 28, 22, 18, 14][index] }));

  return (
    <section className="view-stack">
      {alerts.length > 0 && (
        <div className="notice">
          <Package size={17} />
          <span>Stock bajo: {alerts.map((item) => item.name).join(", ")}</span>
          <ChevronRight size={16} />
        </div>
      )}
      <div className="kpi-grid">
        <Kpi label="Ventas hoy" value={moneyShort(total)} detail={`${done.length} servicios facturados`} icon={CreditCard} />
        <Kpi label="Citas totales" value={today.length} detail={`${active.length} en curso, ${pending.length} pendientes`} icon={CalendarDays} />
        <Kpi label="Ocupacion" value={`${Math.round((today.length / (staff.length * 8)) * 100)}%`} detail="Capacidad del dia" icon={ChartNoAxesColumnIncreasing} good />
        <Kpi label="Meta semanal" value="67%" detail="$3.6M de $5.4M esperado" icon={ClipboardList} />
      </div>
      <div className="two-column">
        <Panel title="Ventas esta semana" aside="COP">
          <div className="bars">{weeklySales.map((value, index) => <Bar key={index} value={value} max={Math.max(...weeklySales)} label={index === 6 ? "Hoy" : weekDays[index]} />)}</div>
          <div className="panel-total"><span>Total semana</span><strong>{money(weeklySales.reduce((a, b) => a + b, 0))}</strong></div>
        </Panel>
        <Panel title="Servicios mas solicitados">
          <div className="progress-list">
            {topServices.map((service, index) => <Progress key={service.id} label={service.name} value={service.count} max={34} caption={`${service.count} este mes`} tone={index === 0 ? colors.rose : colors.blue} />)}
          </div>
        </Panel>
      </div>
      <Panel title="Equipo de hoy">
        <div className="staff-grid">
          {staff.map((member) => {
            const count = today.filter((item) => item.staffId === member.id).length;
            return (
              <div className="staff-card" key={member.id}>
                <Avatar initials={member.initials} color={member.color} size={38} />
                <strong>{member.name}</strong>
                <span>{count} citas</span>
                <em style={{ color: member.available ? member.color : colors.muted }}>{member.available ? "Disponible" : "En pausa"}</em>
              </div>
            );
          })}
        </div>
      </Panel>
      <Panel title="Agenda de hoy">
        <AppointmentList items={today} onSelect={setSelectedAppointment} />
      </Panel>
    </section>
  );
}

function AgendaView({ appointments, setAppointments, setSelectedAppointment }) {
  const [mode, setMode] = React.useState("week");
  const [day, setDay] = React.useState(4);
  const [staffFilter, setStaffFilter] = React.useState(0);
  const days = mode === "day" ? [day] : [0, 1, 2, 3, 4, 5, 6];
  const filtered = (dayIndex) => appointments.filter((item) => item.day === dayIndex && (!staffFilter || item.staffId === staffFilter));

  return (
    <section className="view-stack">
      <div className="toolbar">
        <Segmented value={mode} onChange={setMode} options={[["week", "Semana"], ["day", "Dia"]]} />
        <div className="chip-row">
          {[{ id: 0, name: "Todas", color: colors.rose }, ...staff].map((member) => (
            <button key={member.id} className={`chip ${staffFilter === member.id ? "is-selected" : ""}`} style={{ "--chip": member.color }} onClick={() => setStaffFilter(member.id)}>
              {member.id !== 0 && <span className="dot" style={{ background: member.color }} />}
              {member.name}
            </button>
          ))}
        </div>
      </div>
      {mode === "day" && (
        <div className="day-strip">
          {weekDays.map((label, index) => <button key={label} className={day === index ? "is-active" : ""} onClick={() => setDay(index)}><span>{label}</span><small>{weekDates[index]}</small></button>)}
        </div>
      )}
      <div className="calendar-shell">
        <div className="calendar-head" style={{ gridTemplateColumns: `60px repeat(${days.length}, minmax(140px, 1fr))` }}>
          <span />
          {days.map((index) => <button key={index} onClick={() => { setDay(index); setMode("day"); }}><strong>{weekDays[index]}</strong><small>{weekDates[index]}</small></button>)}
        </div>
        <div className="calendar-body" style={{ gridTemplateColumns: `60px repeat(${days.length}, minmax(140px, 1fr))` }}>
          <div className="hour-column">{hours.map((hour) => <span key={hour}>{hour}</span>)}</div>
          {days.map((dayIndex) => (
            <div className="day-column" key={dayIndex}>
              {hours.map((hour) => <button key={hour} className="hour-cell" onClick={() => {
                const next = { id: Date.now(), staffId: staffFilter || 1, day: dayIndex, time: hour, client: "Nueva clienta", serviceId: 1, status: "pending" };
                setAppointments((items) => [...items, next]);
              }} />)}
              {filtered(dayIndex).map((item) => <AppointmentBlock key={item.id} appointment={item} onSelect={setSelectedAppointment} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsView({ setSelectedClient }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("name");
  const visible = clients
    .filter((client) => {
      const text = `${client.name} ${client.phone} ${client.email}`.toLowerCase();
      if (!text.includes(query.toLowerCase())) return false;
      if (filter === "vip") return client.visits >= 10;
      if (filter === "new") return client.visits <= 3;
      if (filter === "active") return client.active;
      return true;
    })
    .sort((a, b) => sort === "spend" ? b.spend - a.spend : sort === "visits" ? b.visits - a.visits : a.name.localeCompare(b.name));

  return (
    <section className="view-stack">
      <div className="kpi-grid three">
        <Kpi label="Clientas totales" value={clients.length} detail="Registradas" icon={Users} />
        <Kpi label="Total visitas" value={clients.reduce((sum, item) => sum + item.visits, 0)} detail="Historicas" icon={Check} />
        <Kpi label="Facturacion total" value={moneyShort(clients.reduce((sum, item) => sum + item.spend, 0))} detail="Acumulado" icon={Wallet} />
      </div>
      <div className="toolbar">
        <div className="search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre, telefono o email" /></div>
        <Segmented value={filter} onChange={setFilter} options={[["all", "Todas"], ["active", "Activas"], ["vip", "VIP"], ["new", "Nuevas"]]} />
        <select className="select" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="name">A-Z</option>
          <option value="visits">Mas visitas</option>
          <option value="spend">Mayor gasto</option>
        </select>
      </div>
      <div className="list-stack">
        {visible.map((client) => (
          <button className="client-row" key={client.id} onClick={() => setSelectedClient(client)}>
            <Avatar initials={client.initials} color={client.color} size={42} />
            <span><strong>{client.name}</strong><small>{client.phone} · Fav: {client.favorite}</small></span>
            <span className="row-money">{money(client.spend)}<small>{client.visits} visitas</small></span>
            <Badge tone={client.visits >= 10 ? "rose" : client.visits <= 3 ? "blue" : "gray"}>{client.visits >= 10 ? "VIP" : client.visits <= 3 ? "Nueva" : "Regular"}</Badge>
          </button>
        ))}
      </div>
    </section>
  );
}

function UsersView({ appointments, attendance, setAttendance, staffPayments, setStaffPayments, localCosts, setLocalCosts }) {
  const [tab, setTab] = React.useState("manicuristas");
  const pendingStaffPayments = staffPayments.filter((item) => item.status === "Pendiente").reduce((sum, item) => sum + item.amount, 0);
  const pendingCosts = localCosts.filter((item) => item.status === "Pendiente").reduce((sum, item) => sum + item.amount, 0);

  const markCheckIn = (staffId) => {
    const now = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    setAttendance((items) => items.map((item) => item.staffId === staffId ? { ...item, checkIn: item.checkIn || now, status: "Trabajando" } : item));
  };

  const markCheckOut = (staffId) => {
    const now = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    setAttendance((items) => items.map((item) => item.staffId === staffId ? { ...item, checkOut: now, status: "Salida registrada" } : item));
  };

  const markStaffPayment = (id) => {
    setStaffPayments((items) => items.map((item) => item.id === id ? { ...item, status: "Pagado" } : item));
  };

  const deleteLocalCost = (id) => {
    setLocalCosts((items) => items.filter((item) => item.id !== id));
  };

  return (
    <section className="view-stack">
      <div className="kpi-grid four">
        <Kpi label="Manicuristas" value={staff.length} detail="Pueden agendar y marcar horario" icon={Users} />
        <Kpi label="Administradores" value={admins.length} detail="Control de inventario y caja" icon={UserCog} />
        <Kpi label="Pagos pendientes" value={moneyShort(pendingStaffPayments)} detail="A manicuristas" icon={Wallet} />
        <Kpi label="Costos pendientes" value={moneyShort(pendingCosts)} detail="Del local" icon={ClipboardList} />
      </div>

      <div className="toolbar">
        <Segmented
          value={tab}
          onChange={setTab}
          options={[
            ["manicuristas", "Manicuristas"],
            ["administradores", "Administradores"],
            ["pagos", "Pagos manicuristas"],
            ["costos", "Costos local"],
          ]}
        />
      </div>

      {tab === "manicuristas" && (
        <div className="user-grid">
          {staff.map((member) => {
            const dayAppointments = appointments.filter((item) => item.staffId === member.id && item.day === 4);
            const record = attendance.find((item) => item.staffId === member.id);
            return (
              <section className="user-card" key={member.id}>
                <div className="user-card-head">
                  <Avatar initials={member.initials} color={member.color} size={44} />
                  <span>
                    <strong>{member.name}</strong>
                    <small>Manicurista</small>
                  </span>
                  <Badge tone={record?.status === "Trabajando" ? "green" : record?.checkOut ? "blue" : "amber"}>{record?.status}</Badge>
                </div>
                <div className="mini-stats">
                  <span><b>{dayAppointments.length}</b><small>Citas hoy</small></span>
                  <span><b>{record?.checkIn || "--"}</b><small>Entrada</small></span>
                  <span><b>{record?.checkOut || "--"}</b><small>Salida</small></span>
                </div>
                <div className="permission-list">
                  <span><CalendarDays size={15} /> Puede agendar citas</span>
                  <span><Clock size={15} /> Puede registrar ingreso y salida</span>
                </div>
                <div className="button-row">
                  <button className="mini-button" onClick={() => markCheckIn(member.id)}>Marcar entrada</button>
                  <button className="mini-button alt" onClick={() => markCheckOut(member.id)}>Marcar salida</button>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {tab === "administradores" && (
        <div className="user-grid">
          {admins.map((admin) => (
            <section className="user-card" key={admin.id}>
              <div className="user-card-head">
                <Avatar initials={admin.initials} color={colors.rose} size={44} />
                <span>
                  <strong>{admin.name}</strong>
                  <small>{admin.role}</small>
                </span>
                <Badge tone="rose">Admin</Badge>
              </div>
              <div className="permission-list">
                {admin.permissions.includes("Inventario") && <span><Package size={15} /> Puede anadir y eliminar inventario</span>}
                {admin.permissions.includes("Pagos") && <span><Wallet size={15} /> Puede registrar pagos a manicuristas</span>}
                {admin.permissions.includes("Costos") && <span><ClipboardList size={15} /> Puede registrar costos del local</span>}
              </div>
            </section>
          ))}
        </div>
      )}

      {tab === "pagos" && (
        <Panel title="Pagos a manicuristas" aside={money(pendingStaffPayments)}>
          <div className="finance-list">
            {staffPayments.map((payment) => {
              const member = staffById(payment.staffId);
              return (
                <div className="finance-row" key={payment.id}>
                  <Avatar initials={member?.initials} color={member?.color} size={34} />
                  <span><strong>{member?.name}</strong><small>{payment.concept}</small></span>
                  <b>{money(payment.amount)}</b>
                  <Badge tone={payment.status === "Pagado" ? "green" : "amber"}>{payment.status}</Badge>
                  {payment.status === "Pendiente" && <button className="mini-button" onClick={() => markStaffPayment(payment.id)}>Marcar pagado</button>}
                </div>
              );
            })}
          </div>
        </Panel>
      )}

      {tab === "costos" && (
        <Panel title="Costos del local" aside={money(pendingCosts)}>
          <div className="finance-list">
            {localCosts.map((cost) => (
              <div className="finance-row" key={cost.id}>
                <ClipboardList size={20} />
                <span><strong>{cost.concept}</strong><small>{cost.category}</small></span>
                <b>{money(cost.amount)}</b>
                <Badge tone={cost.status === "Pagado" ? "green" : "amber"}>{cost.status}</Badge>
                <button className="icon-button danger" onClick={() => deleteLocalCost(cost.id)} title="Eliminar costo"><Trash2 size={16} /></button>
              </div>
            ))}
          </div>
        </Panel>
      )}
    </section>
  );
}

function PaymentsView({ appointments, setAppointments }) {
  const [tab, setTab] = React.useState("today");
  const [paying, setPaying] = React.useState(null);
  const today = appointments.filter((item) => item.day === 4);
  const paid = today.filter((item) => item.status === "done");
  const pending = today.filter((item) => item.status !== "done");
  const paidTotal = paid.reduce((sum, item) => sum + appointmentValue(item), 0);
  const pendingTotal = pending.reduce((sum, item) => sum + appointmentValue(item), 0);

  return (
    <section className="view-stack">
      <div className="toolbar"><Segmented value={tab} onChange={setTab} options={[["today", "Hoy"], ["week", "Semana"], ["staff", "Rendimiento"]]} /></div>
      <div className="kpi-grid three">
        <Kpi label="Cobrado hoy" value={moneyShort(paidTotal)} detail={`${paid.length} servicios`} icon={CreditCard} good />
        <Kpi label="Por cobrar" value={moneyShort(pendingTotal)} detail={`${pending.length} servicios`} icon={Wallet} />
        <Kpi label="Total proyectado" value={moneyShort(paidTotal + pendingTotal)} detail={`${today.length} servicios totales`} icon={ChartNoAxesColumnIncreasing} />
      </div>
      {tab === "today" && (
        <div className="two-column align-start">
          <Panel title="Pendientes de cobro" aside={money(pendingTotal)}>
            <AppointmentList items={pending} actionLabel="Cobrar" onAction={setPaying} />
          </Panel>
          <Panel title="Cobros del dia" aside={money(paidTotal)}>
            <AppointmentList items={paid} compact />
          </Panel>
        </div>
      )}
      {tab === "week" && <WeeklySales />}
      {tab === "staff" && <StaffPerformance appointments={today} />}
      {paying && (
        <PaymentModal
          appointment={paying}
          onClose={() => setPaying(null)}
          onPay={(id) => setAppointments((items) => items.map((item) => (item.id === id ? { ...item, status: "done" } : item)))}
        />
      )}
    </section>
  );
}

function InventoryView({ inventory, setInventory }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Todas");
  const [adjusting, setAdjusting] = React.useState(null);
  const categories = ["Todas", ...new Set(inventory.map((item) => item.category))];
  const alerts = inventory.filter((item) => item.stock / item.min < 1.5);
  const visible = inventory.filter((item) => (category === "Todas" || item.category === category) && `${item.name} ${item.supplier}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="view-stack">
      <div className="kpi-grid three">
        <Kpi label="Valor inventario" value={moneyShort(inventory.reduce((sum, item) => sum + item.stock * item.price, 0))} detail="En existencias" icon={Package} />
        <Kpi label="Productos alerta" value={alerts.length} detail="Bajo minimo" icon={Bell} />
        <Kpi label="Categorias" value={categories.length - 1} detail="Activas" icon={ClipboardList} />
      </div>
      <div className="toolbar">
        <div className="search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto o proveedor" /></div>
        <div className="chip-row">{categories.map((item) => <button key={item} className={`chip ${category === item ? "is-selected" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      <Panel title="Productos">
        <div className="inventory-table">
          <div className="table-head"><span>Producto</span><span>Categoria</span><span>Stock</span><span>Precio</span><span>Estado</span><span /></div>
          {visible.map((item) => <InventoryRow key={item.id} item={item} onAdjust={setAdjusting} />)}
        </div>
      </Panel>
      {adjusting && <InventoryModal item={adjusting} onClose={() => setAdjusting(null)} onSave={(id, stock) => setInventory((items) => items.map((item) => item.id === id ? { ...item, stock } : item))} />}
    </section>
  );
}

function RemindersView({ templates, setTemplates }) {
  const [tab, setTab] = React.useState("templates");
  const [editing, setEditing] = React.useState(null);
  const history = [
    ["Maria Gonzalez", "Recordatorio 24h", "WhatsApp", "entregado", "ayer 14:00"],
    ["Laura Ospina", "Recordatorio 2h", "WhatsApp", "entregado", "hoy 07:30"],
    ["Andrea Castro", "Confirmacion de cita", "WhatsApp", "pendiente", "hoy 08:00"],
    ["Manuela Torres", "Reactivacion", "Email", "enviado", "hoy 09:00"],
  ];

  return (
    <section className="view-stack">
      <div className="toolbar"><Segmented value={tab} onChange={setTab} options={[["templates", "Plantillas"], ["history", "Historial"]]} /></div>
      <div className="kpi-grid three">
        <Kpi label="Enviados hoy" value={history.length} detail="Recordatorios" icon={MessageCircle} />
        <Kpi label="Entregados" value={history.filter((item) => item[3] === "entregado").length} detail="Confirmados" icon={Check} good />
        <Kpi label="Plantillas activas" value={templates.filter((item) => item.active).length} detail="Automatizadas" icon={Bell} />
      </div>
      {tab === "templates" && (
        <div className="list-stack">
          {templates.map((template) => <TemplateCard key={template.id} template={template} onEdit={setEditing} onToggle={(id) => setTemplates((items) => items.map((item) => item.id === id ? { ...item, active: !item.active } : item))} />)}
        </div>
      )}
      {tab === "history" && (
        <Panel title="Envios recientes">
          <div className="list-stack compact-list">
            {history.map((item, index) => <div className="history-row" key={index}><MessageCircle size={17} /><span><strong>{item[0]}</strong><small>{item[1]} · {item[4]}</small></span><Badge tone={item[3] === "entregado" ? "green" : item[3] === "pendiente" ? "amber" : "blue"}>{item[3]}</Badge></div>)}
          </div>
        </Panel>
      )}
      {editing && <TemplateModal template={editing} onClose={() => setEditing(null)} onSave={(id, message) => setTemplates((items) => items.map((item) => item.id === id ? { ...item, message } : item))} />}
    </section>
  );
}

function AppointmentList({ items, onSelect, actionLabel, onAction, compact }) {
  if (!items.length) return <div className="empty">No hay registros para mostrar.</div>;
  return (
    <div className="appointment-list">
      {items.map((item) => {
        const service = serviceById(item.serviceId);
        const member = staffById(item.staffId);
        return (
          <button className="appointment-row" key={item.id} onClick={() => onSelect?.(item)}>
            <strong>{item.time}</strong>
            <span><b>{item.client}</b><small>{service?.name}</small></span>
            {!compact && <Avatar initials={member?.initials} color={member?.color} size={30} />}
            <em>{moneyShort(service?.price || 0)}</em>
            {actionLabel ? <button className="mini-button" onClick={(event) => { event.stopPropagation(); onAction(item); }}>{actionLabel}</button> : <Badge tone={item.status === "done" ? "green" : item.status === "active" ? "blue" : "gray"}>{status[item.status]?.label}</Badge>}
          </button>
        );
      })}
    </div>
  );
}

function AppointmentBlock({ appointment, onSelect }) {
  const service = serviceById(appointment.serviceId);
  const member = staffById(appointment.staffId);
  const [hh, mm] = appointment.time.split(":").map(Number);
  const top = ((hh - 8) * 60 + mm) * 0.9;
  const height = Math.max((service?.duration || 60) * 0.9 - 4, 32);
  return (
    <button className="appointment-block" style={{ top, height, "--staff": member?.color }} onClick={() => onSelect(appointment)}>
      <strong>{appointment.time} {appointment.client}</strong>
      <small>{service?.name}</small>
    </button>
  );
}

function Kpi({ label, value, detail, icon: Icon, good }) {
  return (
    <div className="kpi-card">
      <div><span>{label}</span><Icon size={18} /></div>
      <strong className={good ? "good" : ""}>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

function Panel({ title, aside, children }) {
  return (
    <section className="panel">
      <header><h2>{title}</h2>{aside && <span>{aside}</span>}</header>
      {children}
    </section>
  );
}

function Bar({ value, max, label }) {
  return (
    <div className="bar-item">
      <span style={{ height: `${Math.round((value / max) * 74)}px` }} />
      <small>{label}</small>
    </div>
  );
}

function Progress({ label, value, max, caption, tone }) {
  return (
    <div className="progress-item">
      <div><span>{label}</span><small>{caption}</small></div>
      <i><b style={{ width: `${Math.round((value / max) * 100)}%`, background: tone }} /></i>
    </div>
  );
}

function Avatar({ initials, color, size = 34 }) {
  return <span className="avatar" style={{ "--avatar": color, width: size, height: size, fontSize: Math.max(10, size * 0.33) }}>{initials}</span>;
}

function Badge({ children, tone = "gray" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="segmented">
      {options.map(([id, label]) => <button key={id} className={value === id ? "is-active" : ""} onClick={() => onChange(id)}>{label}</button>)}
    </div>
  );
}

function ClientModal({ client, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="modal-head">
        <Avatar initials={client.initials} color={client.color} size={48} />
        <div><h2>{client.name}</h2><span>{client.phone}</span><small>{client.email || "Sin email"}</small></div>
        <button className="icon-button" onClick={onClose}><X size={17} /></button>
      </div>
      <div className="modal-grid">
        <Kpi label="Visitas" value={client.visits} detail="Registradas" icon={Users} />
        <Kpi label="Gastado" value={moneyShort(client.spend)} detail="Acumulado" icon={Wallet} />
      </div>
      <div className="note-box"><strong>Servicio favorito</strong><span>{client.favorite}</span></div>
      <div className="note-box"><strong>Notas</strong><span>{client.notes || "Sin notas"}</span></div>
    </Modal>
  );
}

function AppointmentModal({ appointment, onClose, onUpdate }) {
  const service = serviceById(appointment.serviceId);
  const member = staffById(appointment.staffId);
  return (
    <Modal onClose={onClose}>
      <div className="modal-head">
        <Avatar initials={member?.initials} color={member?.color} size={48} />
        <div><h2>{appointment.client}</h2><span>{weekDays[appointment.day]} {weekDates[appointment.day]} · {appointment.time}</span><small>{member?.name}</small></div>
        <button className="icon-button" onClick={onClose}><X size={17} /></button>
      </div>
      <div className="note-box"><strong>{service?.name}</strong><span>{service?.duration} min · {money(service?.price || 0)}</span></div>
      <div className="chip-row">
        {Object.entries(status).map(([key, value]) => <button key={key} className={`chip ${appointment.status === key ? "is-selected" : ""}`} onClick={() => onUpdate(appointment.id, key)}>{value.label}</button>)}
      </div>
    </Modal>
  );
}

function QuickAppointmentModal({ onClose, onSave }) {
  const [form, setForm] = React.useState({ client: "", staffId: 1, serviceId: 1, time: "09:00" });
  return (
    <Modal onClose={onClose}>
      <div className="modal-title"><h2>Nueva cita</h2><button className="icon-button" onClick={onClose}><X size={17} /></button></div>
      <div className="form-grid">
        <label>Clienta<input value={form.client} onChange={(event) => setForm({ ...form, client: event.target.value })} placeholder="Nombre de la clienta" /></label>
        <label>Hora<input type="time" value={form.time} onChange={(event) => setForm({ ...form, time: event.target.value })} /></label>
        <label>Manicurista<select value={form.staffId} onChange={(event) => setForm({ ...form, staffId: Number(event.target.value) })}>{staff.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
        <label>Servicio<select value={form.serviceId} onChange={(event) => setForm({ ...form, serviceId: Number(event.target.value) })}>{services.map((item) => <option key={item.id} value={item.id}>{item.name} - {money(item.price)}</option>)}</select></label>
      </div>
      <button className="primary-button full" onClick={() => { if (form.client.trim()) { onSave(form); onClose(); } }}>Guardar cita</button>
    </Modal>
  );
}

function PaymentModal({ appointment, onClose, onPay }) {
  const service = serviceById(appointment.serviceId);
  return (
    <Modal onClose={onClose}>
      <div className="modal-title"><h2>Registrar pago</h2><button className="icon-button" onClick={onClose}><X size={17} /></button></div>
      <div className="note-box"><strong>{appointment.client}</strong><span>{service?.name}</span></div>
      <div className="pay-total">{money(service?.price || 0)}</div>
      <button className="primary-button full" onClick={() => { onPay(appointment.id); onClose(); }}><Check size={16} /> Confirmar pago</button>
    </Modal>
  );
}

function InventoryRow({ item, onAdjust }) {
  const ratio = item.stock / item.min;
  const tone = ratio < 1 ? "red" : ratio < 1.5 ? "amber" : "green";
  const label = ratio < 1 ? "Bajo" : ratio < 1.5 ? "Alerta" : "OK";
  return (
    <div className="table-row">
      <span><strong>{item.name}</strong><small>{item.supplier}</small></span>
      <span>{item.category}</span>
      <span><strong>{item.stock}</strong> {item.unit}<small>Min {item.min}</small></span>
      <span>{money(item.price)}</span>
      <Badge tone={tone}>{label}</Badge>
      <button className="mini-button" onClick={() => onAdjust(item)}>Ajustar</button>
    </div>
  );
}

function InventoryModal({ item, onClose, onSave }) {
  const [stock, setStock] = React.useState(item.stock);
  return (
    <Modal onClose={onClose}>
      <div className="modal-title"><h2>Ajustar stock</h2><button className="icon-button" onClick={onClose}><X size={17} /></button></div>
      <div className="note-box"><strong>{item.name}</strong><span>Stock actual: {item.stock} {item.unit}</span></div>
      <label className="wide-label">Nuevo stock<input type="number" min="0" value={stock} onChange={(event) => setStock(Number(event.target.value))} /></label>
      <button className="primary-button full" onClick={() => { onSave(item.id, stock); onClose(); }}>Guardar ajuste</button>
    </Modal>
  );
}

function TemplateCard({ template, onEdit, onToggle }) {
  return (
    <div className="template-card">
      <div>
        <MessageCircle size={17} />
        <span><strong>{template.name}</strong><small>{template.timing} · {template.channel}</small></span>
      </div>
      <button className={`switch ${template.active ? "is-on" : ""}`} onClick={() => onToggle(template.id)}><span /></button>
      <button className="mini-button" onClick={() => onEdit(template)}>Editar</button>
      <p>{template.message}</p>
    </div>
  );
}

function TemplateModal({ template, onClose, onSave }) {
  const [message, setMessage] = React.useState(template.message);
  return (
    <Modal onClose={onClose}>
      <div className="modal-title"><h2>Editar plantilla</h2><button className="icon-button" onClick={onClose}><X size={17} /></button></div>
      <textarea className="template-editor" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button className="primary-button full" onClick={() => { onSave(template.id, message); onClose(); }}>Guardar plantilla</button>
    </Modal>
  );
}

function WeeklySales() {
  const sales = [385000, 521000, 448000, 612000, 780000, 920000, 493000];
  return (
    <Panel title="Ventas por dia">
      <div className="progress-list">{sales.map((value, index) => <Progress key={index} label={`${weekDays[index]} ${weekDates[index]}`} value={value} max={Math.max(...sales)} caption={money(value)} tone={index === 6 ? colors.rose : colors.roseLine} />)}</div>
    </Panel>
  );
}

function StaffPerformance({ appointments }) {
  const max = Math.max(...staff.map((member) => appointments.filter((item) => item.staffId === member.id).reduce((sum, item) => sum + appointmentValue(item), 0)), 1);
  return (
    <Panel title="Rendimiento por manicurista">
      <div className="progress-list">
        {staff.map((member) => {
          const total = appointments.filter((item) => item.staffId === member.id).reduce((sum, item) => sum + appointmentValue(item), 0);
          return <Progress key={member.id} label={member.name} value={total} max={max} caption={money(total)} tone={member.color} />;
        })}
      </div>
    </Panel>
  );
}

function Modal({ children, onClose }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal-card" onMouseDown={(event) => event.stopPropagation()}>{children}</div></div>;
}

createRoot(document.getElementById("root")).render(<App />);
