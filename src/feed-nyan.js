function feedNyan(foodName, parentElement) {
    const span = document.createElement('span');
    span.classList.add('part', foodName);

    parentElement.appendChild(span);
    return parentElement.innerHTML;
}

export default feedNyan;