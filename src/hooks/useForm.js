import { useState } from 'react';

export default function handleChange(data, setData, e) {
  e.preventDefault();
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
}
