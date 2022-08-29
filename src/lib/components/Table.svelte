<div class="wrapper">
  <table class="table">
    <slot></slot>
  </table>
</div>

<style global>
  .table {
    min-width: 100%;
    background-color: var(--bg);
    border-collapse: collapse;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: var(--mb, 50px);
  }
  .table th, .table td {
    font-size: 15px;
    /* border: 1px solid var(--border); */
    padding: 10px 15px;
  }
  .table tr {
    border-bottom: 1px solid var(--border);
    transition: border-color 400ms;
  }
  .table tr:hover {
    border-color: var(--primary);
  }
  .table th {
    font-weight: 500;
    border-right: 1px solid var(--border);
  }
  .table .no {
    color: var(--failure);
  }
  .table .yes {
    color: var(--success);
  }
  .table tr:last-child {
    font-weight: 500;
  }
  .table tr:last-child th {
    color: var(--primary);
  }
  .table tr:last-child td {
    color: var(--success);
  }
</style>